const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf-8');

const oldPrompt = 'Output your feedback clearly, using a friendly and encouraging tone.`;';
const newPrompt = 'Return a valid JSON object with two fields: "feedback" (string, 2-4 sentences) and "score" (number, out of 10). Do not include markdown formatting or backticks.`;';

content = content.replace(oldPrompt, newPrompt);
content = content.replace('res.json({ feedback: response.text.trim() });', `
    let result;
    try {
      const cleanedText = response.text.replace(/\\n/g, '').replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();
      result = JSON.parse(cleanedText);
    } catch (e) {
      // Fallback
      result = { feedback: response.text.trim(), score: 5 };
    }
    res.json(result);
`);

fs.writeFileSync('server.ts', content);
