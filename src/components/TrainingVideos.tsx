import React, { useState } from "react";
import { PlayCircle, Video, BookOpen, Monitor, Code, Database, Users, ChevronLeft, ChevronRight } from "lucide-react";


interface Video {
  id: string;
  title: string;
  description: string;
  tag?: string;
}

interface VideoCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  videos: Video[];
}

const VIDEO_CATEGORIES: VideoCategory[] = [

  {
    id: "soft-skills",
    title: "HR & Soft Skills",
    icon: <Users className="w-5 h-5" />,
    videos: [
      {
        id: "sjKcLEVhNfc",
        title: "5 Most Common Job Interview Questions (Diksha Arora)",
        description: "Must prepare interview questions and answers tailored for freshers.",
      },
      {
        id: "ZOc6VMhzoio",
        title: "Crack ANY HR Interview By Doing This! (Nistha Tripathi)",
        description: "Essential strategies to crack HR rounds easily as a fresher.",
      },
      {
        id: "SZizzBvSR3k",
        title: "Why Should We Hire You? (Diksha Arora)",
        description: "Learn the best way to answer this tough HR question confidently.",
      },
      {
        id: "VXRElBMUkMM",
        title: "How to Greet the Interviewer? | Interview Tips",
        description: "First impressions matter! Learn proper greeting etiquette.",
      },
      {
        id: "mTvwtgbl-AU",
        title: "The Power of Body Language (Santwinder Singh)",
        description: "Look confident and professional during your interview with the right body language.",
      }
    ]
  },
  {
    id: "it-skills",
    title: "IT Skills & Technical",
    icon: <Monitor className="w-5 h-5" />,
    videos: [
      {
        id: "4Ib9amXl4gI",
        title: "Java Interview Questions for Freshers",
        description: "Most commonly asked Java interview questions with detailed answers.",
        tag: "Java"
      },
      {
        id: "0K_eZGS5NsU",
        title: "Python Interview Questions for Freshers",
        description: "Ace your Python technical rounds with these frequently asked questions.",
        tag: "Python"
      },
      {
        id: "oX5Y26O5dBE",
        title: "SQL Interview Questions for Freshers",
        description: "Essential SQL queries and database concepts you must know for interviews.",
        tag: "SQL"
      },
      {
        id: "NkWOzTEEcco",
        title: "React JS Interview Questions for Freshers",
        description: "Top ReactJS interview questions to clear your frontend developer interview.",
        tag: "React"
      },
      {
        id: "BKynEBPqiIM",
        title: ".NET Interview Questions for Freshers",
        description: "Common .NET framework questions and concepts.",
        tag: ".NET"
      },
      {
        id: "1u5E_GiXF9M",
        title: "C# Interview Questions for Freshers",
        description: "Prepare for C# technical interviews with these important questions.",
        tag: "C#"
      },
      {
        id: "olFefP5ivDM",
        title: "AI Interview Questions for Freshers",
        description: "Fundamental AI and machine learning questions for entry-level roles.",
        tag: "AI"
      },
      {
        id: "5RzGOqZe-Gk",
        title: "Data Analytics Interview Questions for Freshers",
        description: "Data analysis, processing and interpretation questions.",
        tag: "Data Analytics"
      },
      {
        id: "GX6fOvaS0Xs",
        title: "DevOps Interview Questions for Freshers",
        description: "CI/CD, containers, and deployment questions.",
        tag: "DevOps"
      },
      {
        id: "G0xE0wh768Q",
        title: "Cloud Computing Interview Questions for Freshers",
        description: "Cloud fundamentals and architecture questions.",
        tag: "Cloud"
      },
      {
        id: "aBhTDJ8y7Ec",
        title: "Power BI Interview Questions for Freshers",
        description: "Dashboarding and visualization tool questions.",
        tag: "Power BI"
      }
    ]
  }
];

const ITEMS_PER_PAGE = 6;

export function TrainingVideos() {
  const [activeCategory, setActiveCategory] = useState(VIDEO_CATEGORIES[0].id);
  const [currentPage, setCurrentPage] = useState(1);
  
  const currentCategory = VIDEO_CATEGORIES.find(c => c.id === activeCategory);
  const totalVideos = currentCategory?.videos.length || 0;
  const totalPages = Math.ceil(totalVideos / ITEMS_PER_PAGE);
  const paginatedVideos = currentCategory?.videos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Video className="w-7 h-7 text-indigo-600" />
          Training Videos
        </h2>
        <p className="text-gray-600 mt-2">
          Watch these popular training videos to master soft skills and technical interviews.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                Categories
              </h3>
            </div>
            <div className="p-2 flex flex-col gap-1">
              {VIDEO_CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-lg text-sm transition-colors ${
                    activeCategory === category.id
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <span className={`${activeCategory === category.id ? "text-indigo-600" : "text-gray-400"}`}>
                    {category.icon}
                  </span>
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {paginatedVideos?.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="relative pt-[56.25%] bg-gray-100">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900 leading-tight">
                      {video.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 flex-1">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    {'tag' in video && video.tag ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {video.tag}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Soft Skills
                      </span>
                    )}
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    >
                      <PlayCircle className="w-4 h-4" />
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm font-medium text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
