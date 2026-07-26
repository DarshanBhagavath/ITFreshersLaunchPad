import React from "react";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

export function Roadmap() {
  const steps = [
    {
      title: "Master the Fundamentals",
      description: "Learn a core programming language (Java, Python, C++, or JavaScript). Understand syntax, basic data structures, and algorithms.",
      active: true,
    },
    {
      title: "Data Structures & Algorithms (DSA)",
      description: "Practice solving algorithmic problems. Focus on Arrays, Linked Lists, Trees, Graphs, and Dynamic Programming.",
      active: false,
    },
    {
      title: "Build Projects",
      description: "Create 2-3 solid projects related to your field of interest (Web Dev, App Dev, Data Science, etc.) and host them on GitHub.",
      active: false,
    },
    {
      title: "Prepare Your Resume",
      description: "Craft a professional resume highlighting your skills, education, and projects. Tailor it to the job description.",
      active: false,
    },
    {
      title: "Apply for Jobs & Internships",
      description: "Search for fresher roles on job portals. Leverage referrals and apply consistently.",
      active: false,
    },
    {
      title: "Acing the Interviews",
      description: "Prepare for technical rounds, aptitude tests, and HR interviews. Do mock interviews.",
      active: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">IT Fresher Career Roadmap</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Follow this step-by-step guide to transition from a recent engineering graduate to a successful IT professional.
        </p>
      </div>

      <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-1/2 left-4 md:left-1/2 -translate-x-4 md:-translate-x-1/2 space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-center md:justify-between flex-col md:flex-row w-full">
            <div className="md:w-1/2 w-full flex justify-end md:pr-12 md:text-right pl-12 md:pl-0 mb-4 md:mb-0">
              {index % 2 === 0 ? (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">{step.description}</p>
                </div>
              ) : null}
            </div>

            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-[9px] flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 border-4 border-white shadow">
              <span className="text-indigo-600 font-bold text-sm">{index + 1}</span>
            </div>

            <div className="md:w-1/2 w-full flex justify-start md:pl-12 pl-12">
              {index % 2 !== 0 ? (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">{step.description}</p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
