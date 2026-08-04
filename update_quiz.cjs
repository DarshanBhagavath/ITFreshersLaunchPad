const fs = require('fs');
let content = fs.readFileSync('src/components/InterviewQuiz.tsx', 'utf8');

// Add Search import
if (!content.includes('Search,')) {
    content = content.replace('BookOpen, CheckCircle,', 'Search, BookOpen, CheckCircle,');
}

// Add state for search
if (!content.includes('const [searchQuery, setSearchQuery]')) {
    content = content.replace('const [isSubmitted, setIsSubmitted] = useState(false);', 'const [isSubmitted, setIsSubmitted] = useState(false);\n  const [searchQuery, setSearchQuery] = useState("");\n  const [showSuggestions, setShowSuggestions] = useState(false);');
}

// Update handleSkillSelect
content = content.replace(
    /const handleSkillSelect = \(skill: Skill\) => \{/g,
    'const handleSkillSelect = (skill: Skill) => {\n    setSearchQuery("");\n    setShowSuggestions(false);'
);

const beforeUi = `        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Skill Assessment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Test your knowledge with our comprehensive set of 20 most commonly asked interview questions for each major IT skill.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((skill) => (`;

const afterUi = `        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Skill Assessment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Test your knowledge with our comprehensive set of 20 most commonly asked interview questions for each major IT skill.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a skill (e.g., Java, Python, React)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all text-gray-900 text-lg shadow-sm"
              />
            </div>
            {showSuggestions && searchQuery.trim() !== '' && (
              <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 max-h-60 overflow-y-auto">
                {SKILLS.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())).length > 0 ? (
                  SKILLS.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())).map(skill => (
                    <button
                      key={skill}
                      onClick={() => handleSkillSelect(skill)}
                      className="w-full text-left px-6 py-3 hover:bg-indigo-50 hover:text-indigo-700 transition-colors border-b border-gray-50 last:border-0"
                    >
                      {skill}
                    </button>
                  ))
                ) : (
                  <div className="px-6 py-4 text-gray-500 text-center">No skills found matching "{searchQuery}"</div>
                )}
              </div>
            )}
          </div>
        </div>

        {searchQuery.trim() === '' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skill) => (
              <button
                key={skill}
                onClick={() => handleSkillSelect(skill)}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all text-left group flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                    {skill} Interview Quiz
                  </h3>
                  <p className="text-gray-500 text-sm">20 Questions • Multiple Choice</p>
                </div>
                <BookOpen className="w-8 h-8 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
              </button>
            ))}
          </div>
        )}
        
        {searchQuery.trim() !== '' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())).map((skill) => (`;

content = content.replace(beforeUi, afterUi);

fs.writeFileSync('src/components/InterviewQuiz.tsx', content);
