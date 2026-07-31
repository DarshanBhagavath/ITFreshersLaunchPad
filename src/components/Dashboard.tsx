import React, { useState, useEffect } from 'react';
import { db } from "../lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Terminal } from 'lucide-react';

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
    return <div className="text-center py-8">Loading dashboard...</div>;
  }

  if (!user) {
    return <div className="text-center py-8 text-gray-500">Sign in to track your progress and view your dashboard.</div>;
  }

  const quizChartData = quizData.map((d, idx) => ({
    name: `Quiz ${idx + 1}`,
    score: Math.round((d.score / d.total) * 100)
  }));

  const interviewChartData = interviewData.map((d, idx) => ({
    name: `Int ${idx + 1}`,
    score: d.score * 10
  }));

  const avgQuizScore = quizData.length > 0 ? (quizData.reduce((acc, d) => acc + (d.score / d.total), 0) / quizData.length) * 100 : 0;
  const avgIntScore = interviewData.length > 0 ? (interviewData.reduce((acc, d) => acc + d.score, 0) / interviewData.length) * 10 : 0;

  // Calculate improvement areas and bar chart data
  const improvementAreas = [];
  const skillChartData = [];
  
  if (quizData.length > 0) {
    // Group by skill
    const skillScores: Record<string, {total: number, count: number}> = {};
    quizData.forEach(q => {
      if (!skillScores[q.skill]) skillScores[q.skill] = {total: 0, count: 0};
      skillScores[q.skill].total += (q.score / q.total) * 100;
      skillScores[q.skill].count += 1;
    });
    
    Object.keys(skillScores).forEach(skill => {
      const avg = skillScores[skill].total / skillScores[skill].count;
      skillChartData.push({ name: skill, score: Math.round(avg) });
      if (avg < 70) {
        improvementAreas.push({ topic: skill + " (Quiz)", score: avg });
      }
    });
  }
  
  if (interviewData.length > 0) {
    const sectionScores: Record<string, {total: number, count: number}> = {};
    interviewData.forEach(i => {
      if (!sectionScores[i.sectionTitle]) sectionScores[i.sectionTitle] = {total: 0, count: 0};
      sectionScores[i.sectionTitle].total += i.score * 10;
      sectionScores[i.sectionTitle].count += 1;
    });
    
    Object.keys(sectionScores).forEach(section => {
      const avg = sectionScores[section].total / sectionScores[section].count;
      
      const shortName = section.replace("Technical Interview - ", "").replace("1. ", "").replace("2. ", "").replace("3. ", "").replace("4. ", "");
      const existing = skillChartData.find(d => d.name === shortName);
      if (existing) {
        existing.score = Math.round((existing.score + avg) / 2); // Average if exists
      } else {
        skillChartData.push({ name: shortName.substring(0, 15) + (shortName.length > 15 ? "..." : ""), score: Math.round(avg) });
      }
      
      if (avg < 70) {
        improvementAreas.push({ topic: shortName + " (Interview)", score: avg });
      }
    });
  }
  
  improvementAreas.sort((a, b) => a.score - b.score);


  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Analytics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-indigo-50 rounded-lg p-6">
          <h4 className="text-sm font-semibold text-indigo-900 uppercase tracking-wider mb-2">Avg Quiz Score</h4>
          <p className="text-3xl font-bold text-indigo-600">{Math.round(avgQuizScore)}%</p>
          <p className="text-sm text-indigo-700 mt-2">Based on {quizData.length} attempts</p>
        </div>
        <div className="bg-green-50 rounded-lg p-6">
          <h4 className="text-sm font-semibold text-green-900 uppercase tracking-wider mb-2">Avg Interview Score</h4>
          <p className="text-3xl font-bold text-green-600">{Math.round(avgIntScore)}%</p>
          <p className="text-sm text-green-700 mt-2">Based on {interviewData.length} mock sessions</p>
        </div>
      </div>

      
      {improvementAreas.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-orange-500" />
            Areas for Improvement
          </h4>
          <div className="flex flex-wrap gap-3">
            {improvementAreas.slice(0, 5).map((area, idx) => (
              <span key={idx} className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium border border-orange-100 flex items-center gap-2">
                {area.topic} <span className="bg-orange-200 text-orange-800 px-2 py-0.5 rounded text-xs">{Math.round(area.score)}%</span>
              </span>
            ))}
          </div>
        </div>
      )}
      
      {(quizData.length > 0 || interviewData.length > 0) ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          <div className="h-72 w-full bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-4 text-center">Progress Trends</h4>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart margin={{ top: 5, right: 20, bottom: 20, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" allowDuplicatedCategory={false} axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} dy={10} />
                <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                {quizChartData.length > 0 && <Line type="monotone" data={quizChartData} dataKey="score" name="Quiz %" stroke="#4F46E5" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />}
                {interviewChartData.length > 0 && <Line type="monotone" data={interviewChartData} dataKey="score" name="Interview %" stroke="#10B981" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />}
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="h-72 w-full bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-4 text-center">Scores by Skill Area</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillChartData} margin={{ top: 5, right: 20, bottom: 20, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 10}} dy={10} />
                <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#F3F4F6'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="score" name="Average %" fill="#6366F1" radius={[4, 4, 0, 0]} maxBarSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Take some quizzes or mock interviews to see your progress trends here!</p>
        </div>
      )}
    </div>
  );
}

