const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// import MockInterview
if (!content.includes('MockInterview')) {
  content = content.replace(
    'import { InterviewQuiz } from "./components/InterviewQuiz";',
    'import { InterviewQuiz } from "./components/InterviewQuiz";\nimport { MockInterview } from "./components/MockInterview";'
  );
}

// update activeTab state
if (content.includes('const [activeTab, setActiveTab] = useState<"roadmap" | "jobs" | "training" | "quiz">("roadmap");')) {
  content = content.replace(
    'const [activeTab, setActiveTab] = useState<"roadmap" | "jobs" | "training" | "quiz">("roadmap");',
    'const [activeTab, setActiveTab] = useState<"roadmap" | "jobs" | "training" | "quiz" | "mock_interview">("roadmap");'
  );
}

// add button for Mock Interview
const quizButton = `<button
                onClick={() => setActiveTab("quiz")}
                className={\`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors \${
                  activeTab === "quiz"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }\`}
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Mock Quiz</span>
              </button>`;
const mockInterviewButton = `<button
                onClick={() => setActiveTab("mock_interview")}
                className={\`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors \${
                  activeTab === "mock_interview"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }\`}
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Mock Interview</span>
              </button>`;

if (content.includes(quizButton)) {
  content = content.replace(quizButton, quizButton + '\n              ' + mockInterviewButton);
}

// add MockInterview to main content
const quizContent = '{activeTab === "quiz" && <InterviewQuiz />}';
if (content.includes(quizContent)) {
  content = content.replace(quizContent, quizContent + '\n        {activeTab === "mock_interview" && <MockInterview />}');
}

// import Users icon if not there
if (!content.includes('Users,') && !content.includes(', Users')) {
  content = content.replace('LogOut, Video, FileText }', 'LogOut, Video, FileText, Users }');
}

fs.writeFileSync('src/App.tsx', content);
