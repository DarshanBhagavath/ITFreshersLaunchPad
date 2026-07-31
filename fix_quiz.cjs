const fs = require('fs');
let content = fs.readFileSync('src/components/InterviewQuiz.tsx', 'utf8');

// Replace specific quizQuestions[selectedSkill] instances
content = content.replace(
  'if (selectedSkill && currentQuestionIndex < quizQuestions[selectedSkill].length - 1)',
  'if (selectedSkill && currentQuestionIndex < quizQuestions[selectedSkill].slice(0, 20).length - 1)'
);

content = content.replace(
  'const questions = quizQuestions[selectedSkill];',
  'const questions = quizQuestions[selectedSkill].slice(0, 20);'
);

content = content.replace(
  '<p className="text-gray-500 text-sm">25 Questions • Multiple Choice</p>',
  '<p className="text-gray-500 text-sm">20 Questions • Multiple Choice</p>'
);

content = content.replace(
  'Test your knowledge with our comprehensive set of 25 most commonly asked interview questions for each major IT skill.',
  'Test your knowledge with our comprehensive set of 20 most commonly asked interview questions for each major IT skill.'
);


fs.writeFileSync('src/components/InterviewQuiz.tsx', content);
