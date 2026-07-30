import React, { useState } from 'react';
import { quizQuestions } from '../data/quizQuestions';
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { BookOpen, CheckCircle, XCircle, ArrowRight, ArrowLeft, RefreshCw, Award } from 'lucide-react';

type Skill = string;
const SKILLS: Skill[] = ['Java', 'Python', 'SQL', 'React', 'HTML', 'CSS', 'JavaScript', '.NET', 'C#', 'AI', 'Data Analytics', 'DevOps', 'Cloud', 'Power BI'];

export function InterviewQuiz({ user }: { user: any }) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [currentSkillsPage, setCurrentSkillsPage] = useState(1);
  const SKILLS_PER_PAGE = 5;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSkillSelect = (skill: Skill) => {
    setSelectedSkill(skill);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsSubmitted(false);
  };

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (selectedSkill && currentQuestionIndex < quizQuestions[selectedSkill].length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    let score = 0;
    const questions = quizQuestions[selectedSkill!];
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    
    if (user) {
      try {
        await addDoc(collection(db, "users", user.uid, "quizAttempts"), {
          skill: selectedSkill,
          score,
          total: questions.length,
          timestamp: serverTimestamp()
        });
      } catch (err) {
        console.error("Error saving quiz attempt:", err);
      }
    }
  };

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsSubmitted(false);
  };

  if (!selectedSkill) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Skill Assessment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Test your knowledge with our comprehensive set of 25 most commonly asked interview questions for each major IT skill.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((skill) => (
            <button
              key={skill}
              onClick={() => handleSkillSelect(skill)}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all text-left group flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {skill} Interview Quiz
                </h3>
                <p className="text-gray-500 text-sm">25 Questions • Multiple Choice</p>
              </div>
              <BookOpen className="w-8 h-8 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  const questions = quizQuestions[selectedSkill];
  
  if (isSubmitted) {
    let score = 0;
    const wrongAnswers: typeof questions = [];
    
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score += 1;
      } else {
        wrongAnswers.push(q);
      }
    });

    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8 text-center">
          <Award className={`w-16 h-16 mx-auto mb-4 ${percentage >= 70 ? 'text-green-500' : 'text-yellow-500'}`} />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Results</h2>
          <p className="text-xl text-gray-600 mb-6">You scored {score} out of {questions.length} ({percentage}%)</p>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={handleRetake}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              <RefreshCw className="w-5 h-5" />
              Retake Quiz
            </button>
            <button
              onClick={() => setSelectedSkill(null)}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Choose Another Skill
            </button>
          </div>
        </div>

        {wrongAnswers.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Areas for Improvement</h3>
            <div className="space-y-8">
              {wrongAnswers.map((q, idx) => (
                <div key={q.id} className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                  <p className="font-medium text-gray-900 text-lg mb-4">
                    <span className="text-red-500 mr-2">Q:</span>
                    {q.question}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3 text-red-700">
                      <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-sm">Your Answer:</span>
                        {answers[q.id] || <span className="italic">Not answered</span>}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-sm">Correct Answer:</span>
                        {q.correctAnswer}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Explanation:</span> {q.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={() => setSelectedSkill(null)}
          className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Skills
        </button>
        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          {selectedSkill} Quiz
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-700">Question {currentQuestionIndex + 1} of {questions.length}</h3>
            <span className="text-sm text-gray-500">Answered: {answeredCount} / {questions.length}</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <label
                key={idx}
                className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  answers[currentQuestion.id] === option
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    answers[currentQuestion.id] === option
                      ? 'border-indigo-600'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestion.id] === option && (
                      <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />
                    )}
                  </div>
                </div>
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option}
                  checked={answers[currentQuestion.id] === option}
                  onChange={() => handleAnswerSelect(currentQuestion.id, option)}
                  className="sr-only"
                />
                <span className="text-gray-800">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2.5 text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-8 py-2.5 bg-green-600 text-white font-medium hover:bg-green-700 rounded-lg transition-colors shadow-sm"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-8 py-2.5 bg-indigo-600 text-white font-medium hover:bg-indigo-700 rounded-lg transition-colors shadow-sm flex items-center gap-2"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
      
      {/* Quiz Navigation Grid (Optional) */}
      <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Question Navigator</h4>
        <div className="flex flex-wrap gap-2">
          {questions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestionIndex(idx)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                currentQuestionIndex === idx
                  ? 'bg-indigo-600 text-white shadow-md'
                  : answers[q.id]
                  ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
