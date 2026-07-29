import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Code, Terminal, Users, CheckCircle2, Play, Mic, MicOff, Send, Loader2, StopCircle } from 'lucide-react';

interface ActiveInterviewProps {
  sectionTitle: string;
  onClose: () => void;
}

function ActiveInterview({ sectionTitle, onClose }: ActiveInterviewProps) {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState("");
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize speech recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
      };

      recognition.onerror = (event: any) => {
        if (event.error === 'no-speech') {
          return;
        }
        console.error("Speech recognition error", event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        // Only trigger if not intentionally stopped? For simplicity, we just set state
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }
    
    // Auto-fetch first question
    fetchQuestion();
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      window.speechSynthesis.cancel();
    };
  }, []);

  const fetchQuestion = async () => {
    setLoading(true);
    setFeedback("");
    setTranscript("");
    
    try {
      const res = await fetch("/api/generate-interview-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionTitle, previousQuestions })
      });
      const data = await res.json();
      
      if (data.question) {
        setQuestion(data.question);
        setPreviousQuestions(prev => [...prev, data.question]);
        speakText(data.question);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const speakText = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      if (recognitionRef.current) {
        setTranscript("");
        try {
          recognitionRef.current.start();
          setIsRecording(true);
        } catch (e) {
          console.error(e);
        }
      } else {
        alert("Speech recognition is not supported in this browser. Please type your answer.");
      }
    }
  };

  const submitAnswer = async () => {
    if (!transcript.trim()) return;
    
    setLoading(true);
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    }
    
    try {
      const res = await fetch("/api/evaluate-interview-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionTitle, question, answer: transcript })
      });
      const data = await res.json();
      
      if (data.feedback) {
        setFeedback(data.feedback);
        speakText("Here is my feedback. " + data.feedback);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-indigo-100 p-6 my-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Active Interview Session
          </span>
          <h3 className="text-xl font-bold text-gray-900">{sectionTitle}</h3>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Exit
        </button>
      </div>

      <div className="space-y-6">
        {/* Question Area */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-700 flex items-center gap-2">
              <Users className="w-4 h-4" /> Interviewer
            </h4>
            {question && (
              <button 
                onClick={() => speakText(question)}
                className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center gap-1"
                disabled={loading}
              >
                <Play className="w-4 h-4" /> Replay
              </button>
            )}
          </div>
          
          {loading && !question ? (
            <div className="flex items-center gap-2 text-gray-500 py-4">
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating question...
            </div>
          ) : (
            <p className="text-lg text-gray-900">{question}</p>
          )}
        </div>

        {/* Answer Area */}
        {question && !feedback && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-700">Your Answer</h4>
              <button
                onClick={toggleRecording}
                disabled={loading}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isRecording 
                    ? "bg-red-50 text-red-600 hover:bg-red-100" 
                    : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                }`}
              >
                {isRecording ? (
                  <><StopCircle className="w-4 h-4" /> Stop Recording</>
                ) : (
                  <><Mic className="w-4 h-4" /> Start Speaking</>
                )}
              </button>
            </div>
            
            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Your answer will appear here as you speak, or you can type it manually..."
              className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
              disabled={loading}
            />
            
            <div className="flex justify-end">
              <button
                onClick={submitAnswer}
                disabled={!transcript.trim() || loading}
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading && transcript ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                Complete Answer
              </button>
            </div>
          </div>
        )}

        {/* Feedback Area */}
        {feedback && (
          <div className="bg-green-50 rounded-lg p-6 border border-green-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Feedback
            </h4>
            <p className="text-gray-800 leading-relaxed mb-6">{feedback}</p>
            
            <div className="flex justify-end">
              <button
                onClick={fetchQuestion}
                disabled={loading}
                className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Next Question
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function MockInterview() {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [activeInterviewSection, setActiveInterviewSection] = useState<string | null>(null);

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

  if (activeInterviewSection) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => setActiveInterviewSection(null)}
          className="text-gray-500 hover:text-gray-900 mb-4 flex items-center gap-2"
        >
          &larr; Back to Guide
        </button>
        <ActiveInterview 
          sectionTitle={activeInterviewSection} 
          onClose={() => setActiveInterviewSection(null)} 
        />
      </div>
    );
  }

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

                <div className="bg-indigo-50 rounded-lg p-5 mb-6">
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

                <div className="flex justify-end">
                  <button
                    onClick={() => setActiveInterviewSection(section.title)}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    Take Mock Interview
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
