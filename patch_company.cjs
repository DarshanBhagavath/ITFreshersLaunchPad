const fs = require('fs');
let content = fs.readFileSync('src/components/CompanyTests.tsx', 'utf8');

if (!content.includes('import { companyStaticQuestions }')) {
    content = content.replace("import remarkGfm from 'remark-gfm';", "import remarkGfm from 'remark-gfm';\nimport { companyStaticQuestions } from '../data/companyQuestions';");
}

const selectReplacement = `  const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    setExpandedIndex(null);
    if (company.id === 'tcs') {
      fetchTCSQuestions();
    } else if (companyStaticQuestions[company.id]) {
      setQuestions(companyStaticQuestions[company.id]);
    } else {
      setQuestions([]);
    }
  };`;
content = content.replace(/const handleCompanySelect = [\s\S]*?setQuestions\(\[\]\);\n    \}\n  \};/, selectReplacement);

// Remove "Coming Soon" section because all companies now have data
content = content.replace(/\{!loading && !error && questions\.length === 0 && selectedCompany\.id !== 'tcs' && \([\s\S]*?\}\)/, '');

fs.writeFileSync('src/components/CompanyTests.tsx', content);
