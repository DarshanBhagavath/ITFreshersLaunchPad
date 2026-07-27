const fs = require('fs');

const serverFile = fs.readFileSync('server.ts', 'utf8');

const regex = /app\.get\("\/api\/search-jobs", async \(req, res\) => \{[\s\S]*?\}\);/;

const newEndpoint = `
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
      console.log(\`Returning cached results for \${cacheKey}\`);
      return res.json({ jobs: cache[cacheKey].jobs });
    }

    const fetchJobsForLocation = async (location: string) => {
      const q = \`fresher IT jobs BE B.tech in \${location}\`;
      const url = new URL("https://serpapi.com/search.json");
      url.searchParams.append("engine", "google_jobs");
      url.searchParams.append("q", q);
      url.searchParams.append("hl", "en");
      url.searchParams.append("api_key", apiKey);
      
      try {
        const response = await fetch(url.toString());
        const data = await response.json();
        
        if (data.error && data.error.includes("Google hasn't returned any results")) {
          url.searchParams.set("q", \`software fresher jobs in \${location}\`);
          const fallbackRes = await fetch(url.toString());
          const fallbackData = await fallbackRes.json();
          return (fallbackData.jobs_results || []).map((j: any) => ({ ...j, searched_location: location }));
        }
        
        return (data.jobs_results || []).map((j: any) => ({ ...j, searched_location: location }));
      } catch (e) {
        console.error(\`Failed to fetch jobs for \${location}\`, e);
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
`;

fs.writeFileSync('server.ts', serverFile.replace(regex, newEndpoint.trim()));
console.log('Patched server.ts');
