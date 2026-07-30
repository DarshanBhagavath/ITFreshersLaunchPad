const fs = require('fs');
let content = fs.readFileSync('src/components/MockInterview.tsx', 'utf-8');

const technicalSkillSets = `
const technicalSkillSets = {
  "General Software Engineering (Default)": {
    points: [
      "Core subject questions covering Object-Oriented Programming (OOPs), Database Management (SQL), and your preferred programming language.",
      "Live troubleshooting or minor coding exercises to see how you think under pressure.",
      "For tips on how to approach technical questions and explain your logic clearly during this stage: Search for 'Technical Interview Questions for Freshers' on YouTube."
    ],
    questions: [
      "Explain the four pillars of OOPs with real-world examples.",
      "What is the difference between TRUNCATE, DELETE, and DROP in SQL?",
      "Explain your final year project. What challenges did you face and how did you overcome them?",
      "Write code to detect a loop in a linked list."
    ]
  },
  "Full Stack Web Development": {
    points: [
      "Core web technologies: HTML, CSS, JavaScript.",
      "Frontend frameworks like React, Angular, or Vue.",
      "Backend technologies like Node.js, Python, or Java.",
      "Database management (SQL and NoSQL)."
    ],
    questions: [
      "Explain the difference between client-side and server-side rendering.",
      "What is the Virtual DOM in React?",
      "How do you design a RESTful API?",
      "Explain the concept of middleware in Express.js."
    ]
  },
  "Data Science & Machine Learning": {
    points: [
      "Python and R programming.",
      "Data manipulation libraries like Pandas and NumPy.",
      "Machine learning algorithms and models.",
      "Model evaluation and deployment."
    ],
    questions: [
      "What is the difference between supervised and unsupervised learning?",
      "Explain the concept of cross-validation.",
      "How do you handle missing values in a dataset?",
      "What is overfitting and how do you prevent it?"
    ]
  },
  "Cloud Computing & DevOps": {
    points: [
      "Cloud platforms like AWS, Azure, or Google Cloud.",
      "Containerization using Docker and orchestration with Kubernetes.",
      "CI/CD pipelines and infrastructure as code.",
      "Networking and security basics."
    ],
    questions: [
      "What is the difference between IaaS, PaaS, and SaaS?",
      "Explain the concept of continuous integration.",
      "How does Docker differ from a virtual machine?",
      "What is infrastructure as code?"
    ]
  }
};
`;

if (!content.includes('const technicalSkillSets = {')) {
  const endIndex = content.indexOf('export function MockInterview() {');
  content = content.substring(0, endIndex) + technicalSkillSets + '\n\n' + content.substring(endIndex);
  fs.writeFileSync('src/components/MockInterview.tsx', content);
  console.log("Added technicalSkillSets back!");
} else {
  console.log("Already present");
}
