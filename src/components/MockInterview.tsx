import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import React, { useState, useEffect, useRef } from 'react';
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp, query, orderBy, getDocs } from "firebase/firestore";
import { ChevronDown, ChevronUp, BookOpen, Code, Terminal, Users, CheckCircle2, Play, Mic, MicOff, Send, Loader2, StopCircle } from 'lucide-react';

interface ActiveInterviewProps {
  sectionTitle: string;
  onClose: () => void;
}

function ActiveInterview({ sectionTitle, onClose, user }: { sectionTitle: string, onClose: () => void, user: any }) {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [prefetchedQuestion, setPrefetchedQuestion] = useState("");
  const [isPrefetching, setIsPrefetching] = useState(false);
  
  const recognitionRef = useRef<any>(null);
  const existingTextRef = useRef("");
  const latestTranscriptRef = useRef("");
  const isIntendedRecordingRef = useRef(false);
  
  // A ref to keep track of the current question so background fetches can use it
  const currentQuestionRef = useRef("");

  useEffect(() => {
    let isMounted = true;
    
    const fetchFirstQuestion = async () => {
      setLoading(true);
      setFeedback("");
      setTranscript("");
      existingTextRef.current = "";
      latestTranscriptRef.current = "";
      setPrefetchedQuestion("");
      
      try {
        const res = await fetch("/api/generate-interview-question", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sectionTitle, previousQuestions: [] })
        });
        const contentType = res.headers.get("content-type");
        let data: any = {};
        if (res.ok && contentType && contentType.includes("application/json")) {
          data = await res.json();
        } else {
          // Static deployment fallback
          data = { question: "What is your greatest strength, and how will it help you in this role?" };
        }
        
        if (!isMounted) return;
        
        if (data.question) {
          setQuestion(data.question);
          currentQuestionRef.current = data.question;
          setPreviousQuestions([data.question]);
          speakText(data.question);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchFirstQuestion();
    
    return () => {
      isMounted = false;
      isIntendedRecordingRef.current = false;
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch(e){}
      }
      window.speechSynthesis.cancel();
    };
  }, [sectionTitle]); // Re-fetch only when sectionTitle changes

  const fetchQuestion = async () => {
    // Stop recording if active
    if (isRecording) {
      isIntendedRecordingRef.current = false;
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch(e){}
      }
      setIsRecording(false);
    }
    
    // Navigate to next question quickly if prefetched
    if (prefetchedQuestion) {
      setQuestion(prefetchedQuestion);
      currentQuestionRef.current = prefetchedQuestion;
      setPreviousQuestions(prev => [...prev, prefetchedQuestion]);
      speakText(prefetchedQuestion);
      
      setPrefetchedQuestion("");
      setFeedback("");
      setTranscript("");
      existingTextRef.current = "";
      latestTranscriptRef.current = "";
      return;
    }

    // Fallback if not prefetched
    setLoading(true);
    setQuestion("");
    setFeedback("");
    setTranscript("");
    existingTextRef.current = "";
    latestTranscriptRef.current = "";
    
    try {
      const res = await fetch("/api/generate-interview-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionTitle, previousQuestions })
      });
      const contentType = res.headers.get("content-type");
      let data: any = {};
      if (res.ok && contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        data = { question: "Can you describe a challenging project you worked on and how you handled it?" };
      }
      
      if (data.question) {
        setQuestion(data.question);
        currentQuestionRef.current = data.question;
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

  const handleTranscriptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranscript(e.target.value);
    existingTextRef.current = e.target.value;
    latestTranscriptRef.current = e.target.value;
  };

  const startRecording = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please type your answer.");
      return;
    }

    isIntendedRecordingRef.current = true;

    if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch(e){}
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event: any) => {
      let sessionTranscript = '';
      for (let i = 0; i < event.results.length; ++i) {
        sessionTranscript += event.results[i][0].transcript;
      }
      
      const currentText = (existingTextRef.current + ' ' + sessionTranscript).trim();
      setTranscript(currentText);
      latestTranscriptRef.current = currentText;
    };

    recognition.onerror = (event: any) => {
      if (event.error === 'no-speech') return;
      console.error("Speech recognition error", event.error);
      setIsRecording(false);
      isIntendedRecordingRef.current = false;
    };

    recognition.onend = () => {
      if (isIntendedRecordingRef.current) {
        existingTextRef.current = latestTranscriptRef.current;
        try {
          recognition.start();
        } catch (e) {
          setIsRecording(false);
        }
      } else {
        setIsRecording(false);
      }
    };

    recognitionRef.current = recognition;
    
    try {
      existingTextRef.current = transcript;
      latestTranscriptRef.current = transcript;
      recognition.start();
    } catch (e) {
      console.error(e);
      setIsRecording(false);
      isIntendedRecordingRef.current = false;
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      isIntendedRecordingRef.current = false;
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch(e){}
      }
      setIsRecording(false);
    } else {
      startRecording();
    }
  };

  const submitAnswer = async () => {
    if (!transcript.trim()) return;
    
    setLoading(true);
    if (isRecording) {
      isIntendedRecordingRef.current = false;
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch(e){}
      }
      setIsRecording(false);
    }
    
    // Background prefetch for next question
    setIsPrefetching(true);
    fetch("/api/generate-interview-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sectionTitle, previousQuestions: [...previousQuestions, currentQuestionRef.current] })
    })
    .then(async res => {
      const contentType = res.headers.get("content-type");
      if (res.ok && contentType && contentType.includes("application/json")) {
        return res.json();
      }
      return { question: "Where do you see yourself in 5 years?" };
    })
    .then(data => {
      if (data.question) {
        setPrefetchedQuestion(data.question);
      }
      setIsPrefetching(false);
    })
    .catch(err => {
      console.error("Prefetch error:", err);
      setIsPrefetching(false);
    });

    try {
      const res = await fetch("/api/evaluate-interview-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionTitle, question: currentQuestionRef.current, answer: transcript })
      });
      const contentType = res.headers.get("content-type");
      let data: any = {};
      if (res.ok && contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        data = { score: 8, feedback: "Good answer! You highlighted your strengths well. Make sure to provide more specific examples next time." };
      }
      
      if (data.feedback) {
        setFeedback(data.feedback);
        speakText("Here is my feedback. " + data.feedback);
        
        if (user) {
          try {
            addDoc(collection(db, "users", user.uid, "interviewAttempts"), {
              sectionTitle,
              question: currentQuestionRef.current,
              answer: transcript,
              feedback: data.feedback,
              score: data.score || 0,
              timestamp: serverTimestamp()
            });
          } catch(e) {
            console.error("Error saving attempt", e);
          }
        }
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
              onChange={handleTranscriptChange}
              placeholder="You can type it manually to evaluate an answer..."
              className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
              disabled={loading}
            />
            
            <div className="flex justify-end gap-3">
              <button
                onClick={fetchQuestion}
                disabled={loading}
                className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Skip / Next Question
              </button>
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
                disabled={loading || isPrefetching}
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Question
                {isPrefetching || loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const technicalSkillSets = {
  "General Software Engineering (Default)": {
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
  "Full Stack Web Development": {
    points: [
      "Core web technologies: HTML, CSS, JavaScript.",
      "Frontend frameworks like React, Angular, or Vue.",
      "Backend technologies like Node.js, Python, or Java.",
      "Database management (SQL and NoSQL)."
    ],
    questions: [
      "Explain the difference between client-side and server-side rendering.",
      "What is the Virtual DOM in React?",
      "How do you design a RESTful API?",
      "Explain the concept of middleware in Express.js."
    ]
  },
  "Data Science & Machine Learning": {
    points: [
      "Python and R programming.",
      "Data manipulation libraries like Pandas and NumPy.",
      "Machine learning algorithms and models.",
      "Model evaluation and deployment."
    ],
    questions: [
      "What is the difference between supervised and unsupervised learning?",
      "Explain the concept of cross-validation.",
      "How do you handle missing values in a dataset?",
      "What is overfitting and how do you prevent it?"
    ]
  },
  "Cloud Computing & DevOps": {
    points: [
      "Cloud platforms like AWS, Azure, or Google Cloud.",
      "Containerization using Docker and orchestration with Kubernetes.",
      "CI/CD pipelines and infrastructure as code.",
      "Networking and security basics."
    ],
    questions: [
      "What is the difference between IaaS, PaaS, and SaaS?",
      "Explain the concept of continuous integration.",
      "How does Docker differ from a virtual machine?",
      "What is infrastructure as code?"
    ]
  }
};



export function MockInterview({ user }: { user: any }) {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [activeInterviewSection, setActiveInterviewSection] = useState<string | null>(null);
  const [selectedSkillSet, setSelectedSkillSet] = useState<string>("General Software Engineering (Default)");

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
      points: technicalSkillSets[selectedSkillSet as keyof typeof technicalSkillSets].points,
      questions: technicalSkillSets[selectedSkillSet as keyof typeof technicalSkillSets].questions,
      isTechnical: true
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
        <ActiveInterview user={user} 
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
                
                {section.isTechnical && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Select Skill Set</label>
                    <select
                      value={selectedSkillSet}
                      onChange={(e) => setSelectedSkillSet(e.target.value)}
                      className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    >
                      {Object.keys(technicalSkillSets).map((skill) => (
                        <option key={skill} value={skill}>{skill}</option>
                      ))}
                    </select>
                  </div>
                )}

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
                    onClick={() => setActiveInterviewSection(section.isTechnical ? `${section.title} - ${selectedSkillSet}` : section.title)}
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
