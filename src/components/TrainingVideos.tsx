import React, { useState } from "react";
import { PlayCircle, Video, BookOpen, Monitor, Code, Database, Users } from "lucide-react";

const VIDEO_CATEGORIES = [
  {
    id: "soft-skills",
    title: "HR & Soft Skills",
    icon: <Users className="w-5 h-5" />,
    videos: [
      {
        id: "WtSizC0nIoQ",
        title: "Top 10 HR Interview Questions and Answers for Freshers",
        description: "Learn how to answer the most common HR interview questions confidently.",
      },
      {
        id: "VUzlCG_eoFs",
        title: "How to Introduce Yourself in an Interview",
        description: "Master the 'Tell me about yourself' question with a perfect introduction.",
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
      }
    ]
  }
];

export function TrainingVideos() {
  const [activeCategory, setActiveCategory] = useState(VIDEO_CATEGORIES[0].id);

  const currentCategory = VIDEO_CATEGORIES.find(c => c.id === activeCategory);

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
                  onClick={() => setActiveCategory(category.id)}
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
            {currentCategory?.videos.map((video) => (
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
        </div>
      </div>
    </div>
  );
}
