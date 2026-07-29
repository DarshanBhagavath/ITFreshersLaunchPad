const fs = require('fs');

let content = fs.readFileSync('server.ts', 'utf-8');

const newEndpoints = `
app.post("/api/generate-interview-question", async (req, res) => {
  try {
    const { sectionTitle, previousQuestions = [] } = req.body;
    
    if (!sectionTitle) {
      return res.status(400).json({ error: "Missing sectionTitle" });
    }

    const previousContext = previousQuestions.length > 0 
      ? \`Do not ask these questions again: \${previousQuestions.join(", ")}\` 
      : "";

    const prompt = \`You are an expert technical interviewer for an IT Fresher role.
    The candidate is currently in the "\${sectionTitle}" round.
    
    Generate exactly ONE highly relevant and common interview question for this specific round.
    Make the question sound conversational but professional.
    
    \${previousContext}
    
    Output ONLY the question text without any markdown, quotes, or prefix.\`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    res.json({ question: response.text.trim() });
  } catch (error) {
    console.error("Error generating question:", error);
    res.status(500).json({ error: "Failed to generate interview question" });
  }
});

app.post("/api/evaluate-interview-answer", async (req, res) => {
  try {
    const { sectionTitle, question, answer } = req.body;
    
    if (!question || !answer) {
      return res.status(400).json({ error: "Missing question or answer" });
    }

    const prompt = \`You are an expert technical interviewer evaluating an IT Fresher candidate.
    Round: \${sectionTitle}
    
    Question asked: "\${question}"
    Candidate's answer: "\${answer}"
    
    Evaluate the candidate's answer. Provide concise, constructive feedback (2-4 sentences).
    Point out what they did well, and what they could improve or missed.
    Do not be overly harsh, but be honest and helpful for a fresher.
    
    Output your feedback clearly, using a friendly and encouraging tone.\`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    res.json({ feedback: response.text.trim() });
  } catch (error) {
    console.error("Error evaluating answer:", error);
    res.status(500).json({ error: "Failed to evaluate answer" });
  }
});
`;

if (!content.includes("/api/generate-interview-question")) {
  content = content.replace(
    'async function startServer() {',
    newEndpoints + '\nasync function startServer() {'
  );
  fs.writeFileSync('server.ts', content);
}

