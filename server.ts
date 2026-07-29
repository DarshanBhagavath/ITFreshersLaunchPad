import express from "express";
import path from "path";
import fs from "fs/promises";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

const CACHE_FILE = path.join(process.cwd(), 'jobs_cache.json');
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 1 day

async function readCache() {
  try {
    const data = await fs.readFile(CACHE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}

async function writeCache(cacheData: any) {
  try {
    await fs.writeFile(CACHE_FILE, JSON.stringify(cacheData, null, 2));
  } catch (err) {
    console.error("Error writing cache:", err);
  }
}

const LOCATIONS = ["Bangalore", "Hyderabad", "Pune", "Chennai", "Mumbai", "Delhi NCR", "India"];

app.get("/api/jobs", async (req, res) => {
  try {
    const apiKey = process.env.SERPAPI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({ 
        error: "SERPAPI_API_KEY not configured. Please add it to your secrets.",
        requiresConfig: true
      });
    }

    const cache = await readCache();
    const cacheKey = "all_jobs";

    if (cache[cacheKey] && (Date.now() - cache[cacheKey].timestamp < CACHE_DURATION_MS)) {
      console.log(`Returning cached results for ${cacheKey}`);
      return res.json({ jobs: cache[cacheKey].jobs });
    }

    const fetchJobsForLocation = async (location: string) => {
      const q = `fresher IT jobs BE B.tech in ${location}`;
      const url = new URL("https://serpapi.com/search.json");
      url.searchParams.append("engine", "google_jobs");
      url.searchParams.append("q", q);
      url.searchParams.append("hl", "en");
      url.searchParams.append("api_key", apiKey);
      
      try {
        const response = await fetch(url.toString());
        const data = await response.json();
        
        if (data.error && data.error.includes("Google hasn't returned any results")) {
          url.searchParams.set("q", `software fresher jobs in ${location}`);
          const fallbackRes = await fetch(url.toString());
          const fallbackData = await fallbackRes.json();
          return (fallbackData.jobs_results || []).map((j: any) => ({ ...j, searched_location: location }));
        }
        
        return (data.jobs_results || []).map((j: any) => ({ ...j, searched_location: location }));
      } catch (e) {
        console.error(`Failed to fetch jobs for ${location}`, e);
        return [];
      }
    };

    const allJobsPromises = LOCATIONS.map(loc => fetchJobsForLocation(loc));
    const allJobsResults = await Promise.all(allJobsPromises);
    
    let allJobs: any[] = [];
    allJobsResults.forEach(jobs => {
      allJobs = [...allJobs, ...jobs];
    });

    // Remove duplicates based on job_id
    const uniqueJobsMap = new Map();
    allJobs.forEach(job => {
      if (!uniqueJobsMap.has(job.job_id)) {
        uniqueJobsMap.set(job.job_id, job);
      }
    });
    
    const finalJobs = Array.from(uniqueJobsMap.values());

    cache[cacheKey] = {
      timestamp: Date.now(),
      jobs: finalJobs
    };
    await writeCache(cache);

    res.json({ jobs: finalJobs });
  } catch (error) {
    console.error("Error fetching jobs from SerpApi:", error);
    res.status(500).json({ error: "Failed to fetch live jobs" });
  }
});


app.post("/api/generate-resume", async (req, res) => {
  try {
    const { userDetails, jobDescription } = req.body;
    
    if (!userDetails || !jobDescription) {
      return res.status(400).json({ error: "Missing user details or job description" });
    }

    const prompt = `You are an expert Resume writer. I need you to generate a professional resume customized for a specific job description.
    
Here are the user details:
Name: ${userDetails.fullName}
Phone: ${userDetails.phoneNumber}
Email: ${userDetails.emailId}
Address: ${userDetails.address}
Highest Education: ${userDetails.highestEducation}
Stream/Major: ${userDetails.stream}

Here is the job description they are applying for:
${jobDescription}

Please generate the content for a tailored resume. Include:
1. Contact Information
2. Professional Summary (tailored to the job description)
3. Education
4. Skills (Highlight skills relevant to the job description, assuming standard skills for a fresher in this stream)
5. Projects / Academic Experience (Invent 2-3 plausible academic projects that fit their stream and the job requirements)
6. Certifications or Extracurriculars (plausible general ones)

Output the resume entirely in Markdown format. Do NOT wrap it in a code block or use \`\`\`markdown, just output the raw Markdown text.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    res.json({ resumeMarkdown: response.text });
  } catch (error) {
    console.error("Error generating resume:", error);
    res.status(500).json({ error: "Failed to generate resume" });
  }
});

app.post("/api/reformat-resume", async (req, res) => {
  try {
    const { originalMarkdown, editedText } = req.body;
    
    if (!originalMarkdown || !editedText) {
      return res.status(400).json({ error: "Missing originalMarkdown or editedText" });
    }

    const prompt = `You are a resume formatting assistant. 
    
Here is the original resume in Markdown format:
<original>
${originalMarkdown}
</original>

Here is the user's edited plain text version of that resume:
<edited>
${editedText}
</edited>

Your task is to re-apply the original Markdown formatting (headers, bolding, bullet points) to the edited text. Preserve the user's edits, but restore the rich markdown structure. Output ONLY the raw Markdown text, without any \`\`\`markdown wrappers or extra text.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    res.json({ resumeMarkdown: response.text });
  } catch (error) {
    console.error("Error reformatting resume:", error);
    res.status(500).json({ error: "Failed to reformat resume" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
