const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const navDashboard = `              <button
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

const navCompany = `              <button
                onClick={() => setActiveTab("company_tests")}
                className={\`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors \${
                  activeTab === "company_tests"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }\`}
              >
                <Building className="w-4 h-4" />
                <span className="hidden sm:inline">Company Prep</span>
              </button>`;

content = content.replace(navDashboard, "%%DASHBOARD%%");
content = content.replace(navCompany, "%%COMPANY%%");
content = content.replace("%%COMPANY%%", navDashboard);
content = content.replace("%%DASHBOARD%%", navCompany);

content = content.replace(
  '{activeTab === "dashboard" && <Dashboard user={user} />}\n        {activeTab === "company_tests" && <CompanyTests user={user} />}',
  '{activeTab === "company_tests" && <CompanyTests user={user} />}\n        {activeTab === "dashboard" && <Dashboard user={user} />}'
);

fs.writeFileSync('src/App.tsx', content);
