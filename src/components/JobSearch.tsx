import React, { useState, useEffect, useMemo } from "react";
import { Job, UserDetails } from "../types";
import { MapPin, Building, Briefcase, FileSignature, Loader2, AlertCircle, ChevronLeft, ChevronRight, ExternalLink, ArrowLeft } from "lucide-react";
import { ResumeBuilder } from "./ResumeBuilder";

interface JobSearchProps {
  userDetails: UserDetails;
}

const ITEMS_PER_PAGE = 9;


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

export function JobSearch({ userDetails }: JobSearchProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>("India");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [viewingJob, setViewingJob] = useState<Job | null>(null);
  const [allLiveJobs, setAllLiveJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchLiveJobs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/jobs`);
      const contentType = response.headers.get("content-type");
      
      if (response.ok && contentType && contentType.includes("application/json")) {
        const data = await response.json();
        
        if (data.requiresConfig) {
          setError(data.error);
          setAllLiveJobs(MOCK_JOBS);
        } else if (data.error) {
          setError(data.error);
          setAllLiveJobs(MOCK_JOBS);
        } else {
          const formattedJobs: Job[] = (data.jobs || []).map((job: any, index: number) => ({
            id: `live-${index}`,
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
        console.warn(`API unavailable (${response.status}), falling back to mock jobs.`);
        setAllLiveJobs(MOCK_JOBS);
      }
    } catch (err) {
      console.warn("Failed to connect to backend: " + (err instanceof Error ? err.message : String(err)));
      // Fallback to mock jobs for static deployments
      setAllLiveJobs(MOCK_JOBS);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveJobs();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 on location change
  }, [selectedLocation]);

  const filteredJobs = selectedLocation === "India" 
    ? allLiveJobs.slice().sort((a, b) => (a.location || "").localeCompare(b.location || ""))
    : allLiveJobs.filter(job => {
        if (!job.location) return false;
        const jobLoc = job.location.toLowerCase();
        
        switch (selectedLocation) {
          case "Bangalore / Bengaluru":
            return jobLoc.includes("bangalore") || jobLoc.includes("bengaluru");
          case "Mumbai":
            return jobLoc.includes("mumbai") || jobLoc.includes("navi mumbai") || jobLoc.includes("thane");
          case "Delhi NCR":
            return jobLoc.includes("delhi") || jobLoc.includes("noida") || jobLoc.includes("gurgaon") || jobLoc.includes("gurugram") || jobLoc.includes("new delhi");
          case "Hyderabad":
            return jobLoc.includes("hyderabad") || jobLoc.includes("secunderabad");
          case "Kochi":
            return jobLoc.includes("kochi") || jobLoc.includes("cochin");
          case "Trivandrum":
            return jobLoc.includes("trivandrum") || jobLoc.includes("thiruvananthapuram");
          default:
            return jobLoc.includes(selectedLocation.toLowerCase());
        }
      });

  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / ITEMS_PER_PAGE));
  const currentJobs = filteredJobs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);


  const dynamicLocations = useMemo(() => {
    const locSet = new Set<string>();
    allLiveJobs.forEach(job => {
      if (!job.location) return;
      const lowerLoc = job.location.toLowerCase();
      if (lowerLoc.includes("bangalore") || lowerLoc.includes("bengaluru")) locSet.add("Bangalore / Bengaluru");
      else if (lowerLoc.includes("mumbai") || lowerLoc.includes("navi mumbai") || lowerLoc.includes("thane")) locSet.add("Mumbai");
      else if (lowerLoc.includes("pune")) locSet.add("Pune");
      else if (lowerLoc.includes("hyderabad") || lowerLoc.includes("secunderabad")) locSet.add("Hyderabad");
      else if (lowerLoc.includes("chennai")) locSet.add("Chennai");
      else if (lowerLoc.includes("delhi") || lowerLoc.includes("noida") || lowerLoc.includes("gurgaon") || lowerLoc.includes("gurugram") || lowerLoc.includes("new delhi")) locSet.add("Delhi NCR");
      else if (lowerLoc.includes("kolkata")) locSet.add("Kolkata");
      else if (lowerLoc.includes("ahmedabad")) locSet.add("Ahmedabad");
      else if (lowerLoc.includes("kochi") || lowerLoc.includes("cochin")) locSet.add("Kochi");
      else if (lowerLoc.includes("trivandrum") || lowerLoc.includes("thiruvananthapuram")) locSet.add("Trivandrum");
      else if (lowerLoc.includes("indore")) locSet.add("Indore");
      else if (lowerLoc.includes("jaipur")) locSet.add("Jaipur");
      else if (lowerLoc.includes("chandigarh")) locSet.add("Chandigarh");
      else if (lowerLoc.includes("lucknow")) locSet.add("Lucknow");
      else if (lowerLoc.includes("coimbatore")) locSet.add("Coimbatore");
      else {
        // Fallback: extract the first part before a comma
        const parts = job.location.split(",");
        if (parts.length > 0 && parts[0].trim().length > 0) {
          const firstPart = parts[0].trim();
          if (firstPart.toLowerCase() !== "india") {
             locSet.add(firstPart);
          }
        }
      }
    });
    
    return Array.from(locSet).sort((a, b) => a.localeCompare(b));
  }, [allLiveJobs]);

  if (viewingJob) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <button
          onClick={() => setViewingJob(null)}
          className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 mb-6"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Jobs
        </button>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-8 border-b border-gray-100">
            <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded-full mb-4">
              Fresher (0-1 yrs)
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{viewingJob.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-lg">{viewingJob.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-lg">{viewingJob.location}</span>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Job Description</h3>
            <div className="prose max-w-none text-gray-600 leading-relaxed">
              <p className="whitespace-pre-wrap">{viewingJob.description}</p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Tags & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {viewingJob.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-gray-50 flex flex-col sm:flex-row gap-4 border-t border-gray-100">
            {viewingJob.applyUrl && (
              <a
                href={viewingJob.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm text-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Apply on Company Website
              </a>
            )}
            <button 
              onClick={() => setSelectedJob(viewingJob)}
              className="flex-1 flex items-center justify-center gap-2 bg-white text-indigo-700 font-semibold py-3.5 px-6 rounded-xl hover:bg-indigo-50 transition-colors border border-indigo-200 text-lg shadow-sm"
            >
              <FileSignature className="w-5 h-5" />
              Create Tailored Resume
            </button>
          </div>
        </div>

        {selectedJob && (
          <ResumeBuilder job={selectedJob} userDetails={userDetails} onClose={() => setSelectedJob(null)} />
        )}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Fresher Jobs in IT</h2>
          <p className="text-gray-600 mt-2">Find the perfect launchpad for your career.</p>
        </div>
        
        <div className="w-full sm:w-64">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Location</label>
          <div className="relative">
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-300 text-gray-900 py-3 px-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-medium"
            >
              <option value="India">All India</option>
              {dynamicLocations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <MapPin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-amber-800">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium">Live Search Unavailable</p>
            <p className="text-sm mt-1 text-amber-700">{error}</p>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="py-20 flex justify-center">
          <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
        </div>
      ) : currentJobs.length === 0 && !error ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
          <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-700">No jobs found in {selectedLocation}</h3>
          <p className="text-gray-500 mt-2">Please try another location.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentJobs.map(job => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-indigo-100 transition-all group flex flex-col h-full">
                <div className="p-6 flex-grow">
                  <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full mb-4">
                    Fresher (0-1 yrs)
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">{job.title}</h3>
                  
                  <div className="flex items-center gap-2 mt-3 text-gray-600 text-sm">
                    <Building className="w-4 h-4" />
                    <span className="font-medium line-clamp-1">{job.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span className="line-clamp-1">{job.location}</span>
                  </div>
                  
                  <p className="mt-4 text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <button 
                    onClick={() => setViewingJob(job)}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 font-semibold py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors border border-indigo-100 hover:border-transparent"
                  >
                    View Job Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm font-medium text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </>
      )}

      {selectedJob && (
        <ResumeBuilder job={selectedJob} userDetails={userDetails} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}
