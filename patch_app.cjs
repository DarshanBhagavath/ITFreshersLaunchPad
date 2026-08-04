const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  'useState<"roadmap" | "jobs" | "training" | "quiz" | "mock_interview" | "dashboard">("roadmap");',
  'useState<"roadmap" | "jobs" | "training" | "quiz" | "mock_interview" | "dashboard" | "company_tests">("roadmap");'
);

content = content.replace(
  'import { GraduationCap, Briefcase, Map, Video, FileText, Users, LogOut, PieChart } from "lucide-react";',
  'import { GraduationCap, Briefcase, Map, Video, FileText, Users, LogOut, PieChart, Building } from "lucide-react";'
);

const navButton = `              <button
                onClick={() => setActiveTab("company_tests")}
                className={\`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors \${
                  activeTab === "company_tests"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }\`}
              >
                <Building className="w-4 h-4" />
                <span className="hidden sm:inline">Company Prep</span>
              </button>
            </nav>`;

content = content.replace('            </nav>', navButton);

content = content.replace(
  '{activeTab === "dashboard" && <Dashboard user={user} />}',
  '{activeTab === "dashboard" && <Dashboard user={user} />}\n        {activeTab === "company_tests" && <CompanyTests user={user} />}'
);

if (!content.includes('import { CompanyTests }')) {
    content = content.replace('import { Dashboard } from "./components/Dashboard";', 'import { Dashboard } from "./components/Dashboard";\nimport { CompanyTests } from "./components/CompanyTests";');
}

fs.writeFileSync('src/App.tsx', content);
