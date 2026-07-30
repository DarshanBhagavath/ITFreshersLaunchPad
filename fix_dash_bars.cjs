const fs = require('fs');
let content = fs.readFileSync('src/components/MockInterview.tsx', 'utf-8');

// Ensure BarChart components are imported
if (!content.includes('BarChart, Bar')) {
  content = content.replace(
    'import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";',
    'import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";'
  );
}

// Rename title
content = content.replace('Your Progress Dashboard', 'Performance Analytics');

// Prepare bar chart data
const oldSkillGroup = `
  // Calculate improvement areas
  const improvementAreas = [];
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
      if (avg < 70) {
        improvementAreas.push({ topic: section.replace("Technical Interview - ", "") + " (Interview)", score: avg });
      }
    });
  }
  
  improvementAreas.sort((a, b) => a.score - b.score);
`;

const newSkillGroup = `
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
`;

content = content.replace(oldSkillGroup, newSkillGroup);


// Insert BarChart after LineChart
const oldCharts = `
      {(quizData.length > 0 || interviewData.length > 0) ? (
        <div className="h-72 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" allowDuplicatedCategory={false} axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
              <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend />
              {quizChartData.length > 0 && <Line type="monotone" data={quizChartData} dataKey="score" name="Quiz %" stroke="#4F46E5" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />}
              {interviewChartData.length > 0 && <Line type="monotone" data={interviewChartData} dataKey="score" name="Interview %" stroke="#10B981" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />}
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (`;

const newCharts = `
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
      ) : (`;

content = content.replace(oldCharts, newCharts);

fs.writeFileSync('src/components/MockInterview.tsx', content);
