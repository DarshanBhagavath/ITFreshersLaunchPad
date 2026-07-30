const fs = require('fs');
let content = fs.readFileSync('src/components/MockInterview.tsx', 'utf-8');

if (!content.includes('import { db } from "../lib/firebase";')) {
  content = content.replace("import { BookOpen,", 'import { db } from "../lib/firebase";\nimport { collection, addDoc, serverTimestamp } from "firebase/firestore";\nimport { BookOpen,');
}

if (!content.includes('function ActiveInterview({ sectionTitle, onClose, user }:')) {
  content = content.replace('function ActiveInterview({ sectionTitle, onClose }: { sectionTitle: string, onClose: () => void }) {', 'function ActiveInterview({ sectionTitle, onClose, user }: { sectionTitle: string, onClose: () => void, user: any }) {');
  
  content = content.replace('export function MockInterview() {', 'export function MockInterview({ user }: { user: any }) {');
  content = content.replace('<ActiveInterview \n           sectionTitle={activeInterviewSection}\n           onClose={() => setActiveInterviewSection(null)}\n         />', '<ActiveInterview \n           sectionTitle={activeInterviewSection}\n           onClose={() => setActiveInterviewSection(null)}\n           user={user}\n         />');
}

if (content.includes('if (data.feedback) {')) {
  content = content.replace(`if (data.feedback) {
        setFeedback(data.feedback);
        speakText("Here is my feedback. " + data.feedback);
      }`, `if (data.feedback) {
        setFeedback(data.feedback);
        speakText("Here is my feedback. " + data.feedback);
        
        if (user) {
          try {
            addDoc(collection(db, "users", user.uid, "interviewAttempts"), {
              sectionTitle,
              question: currentQuestionRef.current,
              answer: transcript,
              feedback: data.feedback,
              score: data.score || 0,
              timestamp: serverTimestamp()
            });
          } catch(e) {
            console.error("Error saving attempt", e);
          }
        }
      }`);
}

fs.writeFileSync('src/components/MockInterview.tsx', content);
