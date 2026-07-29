const fs = require('fs');

let content = fs.readFileSync('src/components/InterviewQuiz.tsx', 'utf-8');

content = content.replace(
  "type Skill = 'Java' | 'Python' | 'SQL' | 'React';",
  "type Skill = string;"
);

content = content.replace(
  "const SKILLS: Skill[] = ['Java', 'Python', 'SQL', 'React'];",
  "const SKILLS: Skill[] = ['Java', 'Python', 'SQL', 'React', 'HTML', 'CSS', 'JavaScript', '.NET', 'C#', 'AI', 'Data Analytics', 'DevOps', 'Cloud', 'Power BI'];"
);

// We need to inject pagination state for skills:
content = content.replace(
  "const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);",
  "const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);\n  const [currentSkillsPage, setCurrentSkillsPage] = useState(1);\n  const SKILLS_PER_PAGE = 5;"
);

// Update the render block:
content = content.replace(
  /if \(!selectedSkill\) \{\s*return \([\s\S]*?<\div>\s*\);\s*\}/,
  `if (!selectedSkill) {
    const totalPages = Math.ceil(SKILLS.length / SKILLS_PER_PAGE);
    const paginatedSkills = SKILLS.slice((currentSkillsPage - 1) * SKILLS_PER_PAGE, currentSkillsPage * SKILLS_PER_PAGE);
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Skill Assessment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Test your knowledge with our comprehensive set of 25 most commonly asked interview questions for each major IT skill.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => handleSkillSelect(skill)}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all text-left group flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {skill} Interview Quiz
                </h3>
                <p className="text-gray-500 text-sm">25 Questions • Multiple Choice</p>
              </div>
              <BookOpen className="w-8 h-8 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
            </button>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentSkillsPage(p => Math.max(1, p - 1))}
              disabled={currentSkillsPage === 1}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium text-gray-700">
              Page {currentSkillsPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentSkillsPage(p => Math.min(totalPages, p + 1))}
              disabled={currentSkillsPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    );
  }`
);

fs.writeFileSync('src/components/InterviewQuiz.tsx', content);
