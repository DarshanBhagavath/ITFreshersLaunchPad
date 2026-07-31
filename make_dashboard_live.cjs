const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

content = content.replace(
  'import { collection, query, orderBy, getDocs } from "firebase/firestore";',
  'import { collection, query, orderBy, onSnapshot } from "firebase/firestore";'
);

const fetchLogic = `    const fetchData = async () => {
      try {
        const qQuiz = query(collection(db, "users", user.uid, "quizAttempts"), orderBy("timestamp", "asc"));
        const quizSnap = await getDocs(qQuiz);
        const qData = quizSnap.docs.map(d => d.data());

        const qInterview = query(collection(db, "users", user.uid, "interviewAttempts"), orderBy("timestamp", "asc"));
        const interviewSnap = await getDocs(qInterview);
        const iData = interviewSnap.docs.map(d => d.data());

        setQuizData(qData);
        setInterviewData(iData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();`;

const liveLogic = `    const qQuiz = query(collection(db, "users", user.uid, "quizAttempts"), orderBy("timestamp", "asc"));
    const unsubscribeQuiz = onSnapshot(qQuiz, (quizSnap) => {
      const qData = quizSnap.docs.map(d => d.data());
      setQuizData(qData);
      setLoading(false);
    }, (err) => {
      console.error(err);
      setLoading(false);
    });

    const qInterview = query(collection(db, "users", user.uid, "interviewAttempts"), orderBy("timestamp", "asc"));
    const unsubscribeInterview = onSnapshot(qInterview, (interviewSnap) => {
      const iData = interviewSnap.docs.map(d => d.data());
      setInterviewData(iData);
    }, (err) => {
      console.error(err);
    });

    return () => {
      unsubscribeQuiz();
      unsubscribeInterview();
    };`;

content = content.replace(fetchLogic, liveLogic);

fs.writeFileSync('src/components/Dashboard.tsx', content);
