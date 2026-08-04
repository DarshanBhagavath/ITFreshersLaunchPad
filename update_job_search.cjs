const fs = require('fs');
let content = fs.readFileSync('src/components/JobSearch.tsx', 'utf8');

const fallbackJobs = `
const MOCK_JOBS = [
  {
    id: "mock-1",
    title: "Software Engineer Fresher",
    company: "Tech Solutions Inc.",
    location: "Bangalore",
    description: "Looking for enthusiastic freshers with good programming skills in Java or Python. Must have strong analytical and problem-solving abilities.",
    tags: ["Full Time", "Entry Level", "Java"],
    applyUrl: "#"
  },
  {
    id: "mock-2",
    title: "Junior Data Analyst",
    company: "DataCorp",
    location: "Hyderabad",
    description: "Seeking fresh graduates for data analysis. Knowledge of SQL and basic Python required. Training will be provided.",
    tags: ["Full Time", "SQL", "Python"],
    applyUrl: "#"
  },
  {
    id: "mock-3",
    title: "Frontend Developer (React)",
    company: "WebMakers",
    location: "Pune",
    description: "We are hiring freshers with a passion for UI development. Good understanding of HTML, CSS, JavaScript and React fundamentals is required.",
    tags: ["Full Time", "React", "Frontend"],
    applyUrl: "#"
  },
  {
    id: "mock-4",
    title: "Cloud Support Associate",
    company: "CloudNet Services",
    location: "Chennai",
    description: "Entry-level position for cloud support. Basic networking and Linux knowledge is preferred. Good communication skills are mandatory.",
    tags: ["Full Time", "Cloud", "Support"],
    applyUrl: "#"
  },
  {
    id: "mock-5",
    title: "System Engineer - Trainee",
    company: "Global Systems",
    location: "Mumbai",
    description: "Trainee role for fresh IT graduates. Will be working on enterprise software support and implementation.",
    tags: ["Full Time", "Trainee", "IT Support"],
    applyUrl: "#"
  }
];
`;

content = content.replace('export function JobSearch({ userDetails }: JobSearchProps) {', fallbackJobs + '\nexport function JobSearch({ userDetails }: JobSearchProps) {');

const fetchLogic = `      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        
        if (data.requiresConfig) {
          setError(data.error);
          setAllLiveJobs([]);
        } else if (data.error) {
          setError(data.error);
          setAllLiveJobs([]);
        } else {
          const formattedJobs: Job[] = (data.jobs || []).map((job: any, index: number) => ({
            id: \`live-\${index}\`,
            title: job.title,
            company: job.company_name,
            location: job.location,
            description: job.description || "No description provided.",
            tags: ["Live Job", ...(job.extensions || [])].slice(0, 3),
            applyUrl: job.apply_options?.[0]?.link || job.share_link || job.related_links?.[0]?.link || ""
          }));
          setAllLiveJobs(formattedJobs);
        }
      } else {
        throw new Error(\`Server returned non-JSON response (\${response.status})\`);
      }`;

const newFetchLogic = `      if (response.ok && contentType && contentType.includes("application/json")) {
        const data = await response.json();
        
        if (data.requiresConfig) {
          setError(data.error);
          setAllLiveJobs(MOCK_JOBS);
        } else if (data.error) {
          setError(data.error);
          setAllLiveJobs(MOCK_JOBS);
        } else {
          const formattedJobs: Job[] = (data.jobs || []).map((job: any, index: number) => ({
            id: \`live-\${index}\`,
            title: job.title,
            company: job.company_name,
            location: job.location,
            description: job.description || "No description provided.",
            tags: ["Live Job", ...(job.extensions || [])].slice(0, 3),
            applyUrl: job.apply_options?.[0]?.link || job.share_link || job.related_links?.[0]?.link || ""
          }));
          setAllLiveJobs(formattedJobs);
        }
      } else {
        // Use mock data fallback for static hosting environments like Netlify where the backend API is missing
        console.warn(\`API unavailable (\${response.status}), falling back to mock jobs.\`);
        setAllLiveJobs(MOCK_JOBS);
      }`;

const errorCatch = `    } catch (err) {
      setError("Failed to connect: " + (err instanceof Error ? err.message : String(err)));
      setAllLiveJobs([]);
    }`;

const newErrorCatch = `    } catch (err) {
      console.warn("Failed to connect to backend: " + (err instanceof Error ? err.message : String(err)));
      // Fallback to mock jobs for static deployments
      setAllLiveJobs(MOCK_JOBS);
    }`;

content = content.replace(fetchLogic, newFetchLogic);
content = content.replace(errorCatch, newErrorCatch);

fs.writeFileSync('src/components/JobSearch.tsx', content);
