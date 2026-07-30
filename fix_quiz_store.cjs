const fs = require('fs');
let content = fs.readFileSync('src/components/InterviewQuiz.tsx', 'utf-8');

if (!content.includes('import { db } from "../lib/firebase";')) {
  content = content.replace("import { BookOpen,", 'import { db } from "../lib/firebase";\nimport { collection, addDoc, serverTimestamp } from "firebase/firestore";\nimport { BookOpen,');
}

if (!content.includes('export function InterviewQuiz({ user }: { user: any }) {')) {
  content = content.replace("export function InterviewQuiz() {", "export function InterviewQuiz({ user }: { user: any }) {");
}

if (content.includes("const handleSubmit = () => {")) {
  const newSubmit = `const handleSubmit = async () => {
    setIsSubmitted(true);
    let score = 0;
    const questions = quizQuestions[selectedSkill!];
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    
    if (user) {
      try {
        await addDoc(collection(db, "users", user.uid, "quizAttempts"), {
          skill: selectedSkill,
          score,
          total: questions.length,
          timestamp: serverTimestamp()
        });
      } catch (err) {
        console.error("Error saving quiz attempt:", err);
      }
    }
  };`;
  content = content.replace("const handleSubmit = () => {\n    setIsSubmitted(true);\n  };", newSubmit);
  fs.writeFileSync('src/components/InterviewQuiz.tsx', content);
  console.log("Updated InterviewQuiz");
}
