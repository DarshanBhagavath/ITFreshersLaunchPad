/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { JobSearch } from "./components/JobSearch";
import { Roadmap } from "./components/Roadmap";
import { TrainingVideos } from "./components/TrainingVideos";
import { Briefcase, Map, GraduationCap, LogOut, Video, FileText } from "lucide-react";
import { Auth } from "./components/Auth";
import { InterviewQuiz } from "./components/InterviewQuiz";
import { auth, db } from "./lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { UserDetails } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<"roadmap" | "jobs" | "training" | "quiz">("roadmap");
  const [user, setUser] = useState<any>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data() as UserDetails);
          }
        } catch (error) {
          
        }
      } else {
        setUser(null);
        setUserDetails(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthSuccess = (user: any, details: UserDetails | null) => {
    setUser(user);
    setUserDetails(details);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user || !userDetails) {
    return <Auth onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-600">
            <GraduationCap className="w-8 h-8" />
            <h1 className="text-xl font-bold tracking-tight">IT Fresher Launchpad</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("roadmap")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "roadmap"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <Map className="w-4 h-4" />
                <span className="hidden sm:inline">Career Roadmap</span>
              </button>
              <button
                onClick={() => setActiveTab("jobs")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "jobs"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">Job Search</span>
              </button>
              <button
                onClick={() => setActiveTab("training")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "training"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <Video className="w-4 h-4" />
                <span className="hidden sm:inline">Training Videos</span>
              </button>
              <button
                onClick={() => setActiveTab("quiz")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "quiz"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Mock Quiz</span>
              </button>
            </nav>

            <button 
              onClick={handleLogout}
              className="text-gray-500 hover:text-gray-900 transition-colors p-2"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-12">
        {activeTab === "roadmap" && <Roadmap />}
        {activeTab === "jobs" && <JobSearch userDetails={userDetails} />}
        {activeTab === "training" && <TrainingVideos />}
        {activeTab === "quiz" && <InterviewQuiz />}
      </main>
    </div>
  );
}

