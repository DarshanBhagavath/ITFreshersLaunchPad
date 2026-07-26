import React, { useState } from "react";
import { JOBS, LOCATIONS } from "../data";
import { Job, UserDetails } from "../types";
import { MapPin, Building, Briefcase, FileSignature } from "lucide-react";
import { ResumeBuilder } from "./ResumeBuilder";

interface JobSearchProps {
  userDetails: UserDetails;
}

export function JobSearch({ userDetails }: JobSearchProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>("Bangalore");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = JOBS.filter(job => job.location.toLowerCase() === selectedLocation.toLowerCase());

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Fresher Jobs in IT</h2>
          <p className="text-gray-600 mt-2">Find the perfect launchpad for your career.</p>
        </div>
        
        <div className="w-full md:w-64">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Location</label>
          <div className="relative">
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-300 text-gray-900 py-3 px-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-medium"
            >
              {LOCATIONS.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <MapPin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
          <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-700">No jobs found in {selectedLocation}</h3>
          <p className="text-gray-500 mt-2">Please try another location.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-indigo-100 transition-all group flex flex-col h-full">
              <div className="p-6 flex-grow">
                <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full mb-4">
                  Fresher (0-1 yrs)
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">{job.title}</h3>
                
                <div className="flex items-center gap-2 mt-3 text-gray-600 text-sm">
                  <Building className="w-4 h-4" />
                  <span className="font-medium">{job.company}</span>
                </div>
                
                <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                
                <p className="mt-4 text-gray-600 text-sm line-clamp-3 leading-relaxed">
                  {job.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <button 
                  onClick={() => setSelectedJob(job)}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 font-semibold py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors border border-indigo-100 hover:border-transparent"
                >
                  <FileSignature className="w-4 h-4" />
                  Create Tailored Resume
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedJob && (
        <ResumeBuilder job={selectedJob} userDetails={userDetails} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}
