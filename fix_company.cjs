const fs = require('fs');
let content = fs.readFileSync('src/components/CompanyTests.tsx', 'utf8');
content = content.replace("className={`bg-white p-8 rounded-xl shadow-sm border-2 transition-all text-left group flex items-start justify-between \\${company.color}`}", "className={`bg-white p-8 rounded-xl shadow-sm border-2 transition-all text-left group flex items-start justify-between ${company.color}`}");
fs.writeFileSync('src/components/CompanyTests.tsx', content);
