const fs = require('fs');
let content = fs.readFileSync('src/components/MockInterview.tsx', 'utf-8');

const dashStart = content.indexOf('function Dashboard({ user }: { user: any }) {');
const dashEnd = content.indexOf('export function MockInterview({ user }: { user: any }) {');
let dashCode = content.substring(dashStart, dashEnd);

// Add improvement areas logic
dashCode = dashCode.replace('const avgIntScore = interviewData.length > 0 ? (interviewData.reduce((acc, d) => acc + d.score, 0) / interviewData.length) * 10 : 0;', 
`const avgIntScore = interviewData.length > 0 ? (interviewData.reduce((acc, d) => acc + d.score, 0) / interviewData.length) * 10 : 0;

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
`);

// Add UI for improvement areas
dashCode = dashCode.replace(
  '{(quizData.length > 0 || interviewData.length > 0) ? (',
  `
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
      
      {(quizData.length > 0 || interviewData.length > 0) ? (`
);

content = content.substring(0, dashStart) + dashCode + content.substring(dashEnd);
fs.writeFileSync('src/components/MockInterview.tsx', content);
