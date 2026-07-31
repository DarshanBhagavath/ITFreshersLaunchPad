const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Update activeTab type
content = content.replace(
  'useState<"roadmap" | "jobs" | "training" | "quiz" | "mock_interview">',
  'useState<"roadmap" | "jobs" | "training" | "quiz" | "mock_interview" | "dashboard">'
);

// Add import for Dashboard
if (!content.includes("import { Dashboard }")) {
  content = content.replace(
    'import { MockInterview } from "./components/MockInterview";',
    'import { MockInterview } from "./components/MockInterview";\nimport { Dashboard } from "./components/Dashboard";'
  );
}

// Add import for PieChart icon if needed (lucide-react)
if (!content.includes("PieChart")) {
  content = content.replace(
    'FileText,',
    'FileText,\n  PieChart,'
  );
}

// Add the tab button
const mockInterviewButton = `              <button
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

const dashboardButton = `              <button
                onClick={() => setActiveTab("dashboard")}
                className={\`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors \${
                  activeTab === "dashboard"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }\`}
              >
                <PieChart className="w-4 h-4" />
                <span className="hidden sm:inline">Analytics</span>
              </button>`;

content = content.replace(mockInterviewButton, mockInterviewButton + '\n' + dashboardButton);

// Add the rendering component
const mockInterviewRender = '{activeTab === "mock_interview" && <MockInterview user={user} />}';
const dashboardRender = '{activeTab === "dashboard" && <Dashboard user={user} />}';

content = content.replace(mockInterviewRender, mockInterviewRender + '\n        ' + dashboardRender);

fs.writeFileSync('src/App.tsx', content);
