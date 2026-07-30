const fs = require('fs');
let content = fs.readFileSync('src/components/MockInterview.tsx', 'utf-8');

if (!content.includes('import { collection, addDoc, serverTimestamp, query, orderBy, getDocs } from "firebase/firestore";')) {
  content = content.replace('import { collection, addDoc, serverTimestamp } from "firebase/firestore";', 'import { collection, addDoc, serverTimestamp, query, orderBy, getDocs } from "firebase/firestore";');
}

if (!content.includes('import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";')) {
  content = 'import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";\n' + content;
}

if (!content.includes('function Dashboard({ user }: { user: any }) {')) {
  const dashCode = `
function Dashboard({ user }: { user: any }) {
  const [quizData, setQuizData] = useState<any[]>([]);
  const [interviewData, setInterviewData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        const qQuiz = query(collection(db, "users", user.uid, "quizAttempts"), orderBy("timestamp", "asc"));
        const quizSnap = await getDocs(qQuiz);
        const qData = quizSnap.docs.map(d => d.data());

        const qInterview = query(collection(db, "users", user.uid, "interviewAttempts"), orderBy("timestamp", "asc"));
        const interviewSnap = await getDocs(qInterview);
        const iData = interviewSnap.docs.map(d => d.data());

        setQuizData(qData);
        setInterviewData(iData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  if (loading) {
    return <div className="text-center py-8">Loading dashboard...</div>;
  }

  if (!user) {
    return <div className="text-center py-8 text-gray-500">Sign in to track your progress and view your dashboard.</div>;
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

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Your Progress Dashboard</h3>
      
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
      ) : (
        <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Take some quizzes or mock interviews to see your progress trends here!</p>
        </div>
      )}
    </div>
  );
}
`;
  
  content = content.replace('export function MockInterview({ user }: { user: any }) {', dashCode + '\nexport function MockInterview({ user }: { user: any }) {');
  
  content = content.replace(
    '<p className="text-gray-600">\n          A comprehensive guide to different interview rounds for Freshers, complete with insights and commonly asked questions.\n        </p>\n      </div>\n      <div className="space-y-4">',
    '<p className="text-gray-600">\n          A comprehensive guide to different interview rounds for Freshers, complete with insights and commonly asked questions.\n        </p>\n      </div>\n      <Dashboard user={user} />\n      <div className="space-y-4">'
  );
  
  fs.writeFileSync('src/components/MockInterview.tsx', content);
  console.log("Added Dashboard to MockInterview");
}
