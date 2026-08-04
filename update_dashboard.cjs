const fs = require('fs');

const content = `import React, { useState, useEffect } from 'react';
import { db } from "../lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Terminal, TrendingUp, Target, Award, BrainCircuit, Activity } from 'lucide-react';

export function Dashboard({ user }: { user: any }) {
  const [quizData, setQuizData] = useState<any[]>([]);
  const [interviewData, setInterviewData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const qQuiz = query(collection(db, "users", user.uid, "quizAttempts"), orderBy("timestamp", "asc"));
    const unsubscribeQuiz = onSnapshot(qQuiz, (quizSnap) => {
      const qData = quizSnap.docs.map(d => d.data());
      setQuizData(qData);
      setLoading(false);
    }, (err) => {
      console.error(err);
      setLoading(false);
    });

    const qInterview = query(collection(db, "users", user.uid, "interviewAttempts"), orderBy("timestamp", "asc"));
    const unsubscribeInterview = onSnapshot(qInterview, (interviewSnap) => {
      const iData = interviewSnap.docs.map(d => d.data());
      setInterviewData(iData);
    }, (err) => {
      console.error(err);
    });

    return () => {
      unsubscribeQuiz();
      unsubscribeInterview();
    };
  }, [user]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium">Loading your analytics...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-200">
        <Activity className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Sign in Required</h3>
        <p className="text-gray-500">Sign in to track your progress and view your personalized analytics dashboard.</p>
      </div>
    );
  }

  const quizChartData = quizData.map((d, idx) => ({
    name: \`Quiz \${idx + 1}\`,
    score: Math.round((d.score / d.total) * 100)
  }));

  const interviewChartData = interviewData.map((d, idx) => ({
    name: \`Int \${idx + 1}\`,
    score: d.score * 10
  }));

  const avgQuizScore = quizData.length > 0 ? (quizData.reduce((acc, d) => acc + (d.score / d.total), 0) / quizData.length) * 100 : 0;
  const avgIntScore = interviewData.length > 0 ? (interviewData.reduce((acc, d) => acc + d.score, 0) / interviewData.length) * 10 : 0;
  
  const totalTests = quizData.length + interviewData.length;
  
  // Calculate improvement areas and bar chart data
  const improvementAreas: { topic: string, score: number }[] = [];
  const skillChartData: { name: string, score: number, fullMark: number }[] = [];
  
  const skillScores: Record<string, {total: number, count: number}> = {};

  if (quizData.length > 0) {
    quizData.forEach(q => {
      if (!skillScores[q.skill]) skillScores[q.skill] = {total: 0, count: 0};
      skillScores[q.skill].total += (q.score / q.total) * 100;
      skillScores[q.skill].count += 1;
    });
  }
  
  if (interviewData.length > 0) {
    interviewData.forEach(i => {
      const shortName = i.sectionTitle.replace("Technical Interview - ", "").replace("1. ", "").replace("2. ", "").replace("3. ", "").replace("4. ", "");
      if (!skillScores[shortName]) skillScores[shortName] = {total: 0, count: 0};
      skillScores[shortName].total += i.score * 10;
      skillScores[shortName].count += 1;
    });
  }

  Object.keys(skillScores).forEach(skill => {
    const avg = skillScores[skill].total / skillScores[skill].count;
    const displayName = skill.substring(0, 12) + (skill.length > 12 ? "..." : "");
    skillChartData.push({ name: displayName, score: Math.round(avg), fullMark: 100 });
    
    if (avg < 75) {
      improvementAreas.push({ topic: skill, score: avg });
    }
  });
  
  improvementAreas.sort((a, b) => a.score - b.score);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h2>
        <p className="text-gray-600 text-lg">Track your performance and identify areas for growth.</p>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex items-center gap-6 hover:border-indigo-300 transition-colors">
          <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
            <Target className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Avg Quiz Score</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{Math.round(avgQuizScore)}%</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{quizData.length} quizzes completed</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex items-center gap-6 hover:border-green-300 transition-colors">
          <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-7 h-7 text-green-600" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Avg Interview Score</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{Math.round(avgIntScore)}%</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{interviewData.length} sessions completed</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex items-center gap-6 hover:border-amber-300 transition-colors">
          <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
            <Award className="w-7 h-7 text-amber-600" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Total Activities</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{totalTests}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Assessments taken</p>
          </div>
        </div>
      </div>

      {improvementAreas.length > 0 && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-orange-500" />
            Recommended Focus Areas
          </h4>
          <div className="flex flex-wrap gap-3">
            {improvementAreas.slice(0, 6).map((area, idx) => (
              <div key={idx} className="bg-orange-50/80 px-4 py-3 rounded-xl border border-orange-100 flex items-center justify-between min-w-[200px] flex-1">
                <span className="font-semibold text-orange-900">{area.topic}</span>
                <span className="bg-white text-orange-700 px-2.5 py-1 rounded-md text-sm font-bold shadow-sm">{Math.round(area.score)}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {(quizData.length > 0 || interviewData.length > 0) ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Line Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 h-96">
            <h4 className="text-base font-bold text-gray-900 mb-6 text-center">Score Progression</h4>
            <div className="w-full h-full pb-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart margin={{ top: 5, right: 20, bottom: 20, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                  <XAxis dataKey="name" allowDuplicatedCategory={false} axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                  <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  {quizChartData.length > 0 && <Line type="monotone" data={quizChartData} dataKey="score" name="Quiz %" stroke="#4F46E5" strokeWidth={3} dot={{r: 4, fill: '#4F46E5', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />}
                  {interviewChartData.length > 0 && <Line type="monotone" data={interviewChartData} dataKey="score" name="Interview %" stroke="#10B981" strokeWidth={3} dot={{r: 4, fill: '#10B981', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 h-96">
            <h4 className="text-base font-bold text-gray-900 mb-2 text-center">Skill Mastery Map</h4>
            <div className="w-full h-full pb-8">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillChartData}>
                  <PolarGrid stroke="#E5E7EB" />
                  <PolarAngleAxis dataKey="name" tick={{fill: '#4B5563', fontSize: 12, fontWeight: 500}} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{fill: '#9CA3AF', fontSize: 10}} />
                  <Radar name="Proficiency" dataKey="score" stroke="#6366F1" fill="#818CF8" fillOpacity={0.5} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-gray-200">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Data Yet</h3>
          <p className="text-gray-500 max-w-md mx-auto">Take some quizzes or practice mock interviews to generate your personalized performance analytics.</p>
        </div>
      )}
    </div>
  );
}
`;

fs.writeFileSync('src/components/Dashboard.tsx', content);
