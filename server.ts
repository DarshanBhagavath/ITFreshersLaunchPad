import express from "express";
import path from "path";
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
