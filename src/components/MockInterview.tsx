import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Code, Terminal, Users, CheckCircle2 } from 'lucide-react';

export function MockInterview() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const sections = [
    {
      title: "1. Initial Screening / HR Call",
      icon: <Users className="w-5 h-5 text-indigo-500" />,
      description: "Short phone or video chat to check your communication skills, qualifications, and English proficiency.",
      points: [
        "Quick questions about your background, degree, and interest in the company.",
        "Discussion of basic logistics like salary expectations, location, and availability."
      ],
      questions: [
        "Tell me about yourself.",
        "Why do you want to join our company?",
        "Are you open to relocation?",
        "What are your salary expectations?"
      ]
    },
    {
      title: "2. Online Assessment / Coding Test",
      icon: <Code className="w-5 h-5 text-indigo-500" />,
      description: "Objective multiple-choice questions covering computer science basics, data structures, and logical reasoning.",
      points: [
        "Basic coding challenges on platforms like HackerRank or LeetCode to test your problem-solving logic and syntax.",
        "Evaluation of edge cases, code efficiency, and working solutions."
      ],
      questions: [
        "Multiple-choice questions on OOPs, DBMS, and OS.",
        "Aptitude questions (quantitative, logical reasoning).",
        "Coding: Reverse a string, Palindrome check, Find missing number in array.",
        "Coding: SQL query to find second highest salary."
      ]
    },
    {
      title: "3. Technical Interview",
      icon: <Terminal className="w-5 h-5 text-indigo-500" />,
      description: "Deep dive into your college projects, final-year work, or internships.",
      points: [
        "Core subject questions covering Object-Oriented Programming (OOPs), Database Management (SQL), and your preferred programming language.",
        "Live troubleshooting or minor coding exercises to see how you think under pressure.",
        "For tips on how to approach technical questions and explain your logic clearly during this stage: Search for 'Technical Interview Questions for Freshers' on YouTube."
      ],
      questions: [
        "Explain the four pillars of OOPs with real-world examples.",
        "What is the difference between TRUNCATE, DELETE, and DROP in SQL?",
        "Explain your final year project. What challenges did you face and how did you overcome them?",
        "Write code to detect a loop in a linked list."
      ]
    },
    {
      title: "4. Managerial / Behavioral Round",
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      description: "Discussion with a team lead or engineering manager about how you handle teamwork and pressure.",
      points: [
        "Situational questions to see how you adapt to feedback or resolve conflicts.",
        "Assessment of your cultural fit within the company."
      ],
      questions: [
        "Describe a time when you worked in a team and had a conflict. How did you resolve it?",
        "How do you prioritize tasks when you have multiple deadlines?",
        "What is your biggest weakness and how are you working to improve it?",
        "Where do you see yourself in 3-5 years?"
      ]
    },
    {
      title: "5. Final HR Discussion",
      icon: <CheckCircle2 className="w-5 h-5 text-indigo-500" />,
      description: "Formal offer discussion detailing compensation, benefits, and joining dates.",
      points: [
        "Verification of documents and submission details.",
        "If you want to prepare further, let me know: What specific IT role are you applying for (e.g., software developer, support analyst)? Which programming languages or tools do you know best? I can share common questions and tips for that specific path!"
      ],
      questions: [
        "Do you have any questions for us?",
        "Are you comfortable with a background check?",
        "When can you join us if offered the role?"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Mock Interview Guide</h2>
        <p className="text-gray-600">
          A comprehensive guide to different interview rounds for Freshers, complete with insights and commonly asked questions.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setOpenSection(openSection === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <h3 className="font-semibold text-gray-900 text-left">{section.title}</h3>
              </div>
              {openSection === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {openSection === index && (
              <div className="px-6 py-5 border-t border-gray-200">
                <p className="text-gray-700 mb-4">{section.description}</p>
                
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Key Points</h4>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="bg-indigo-50 rounded-lg p-5">
                  <h4 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Commonly Asked Questions
                  </h4>
                  <ul className="space-y-3">
                    {section.questions.map((q, i) => (
                      <li key={i} className="flex items-start gap-2 text-indigo-800">
                        <span className="font-medium mt-0.5">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
