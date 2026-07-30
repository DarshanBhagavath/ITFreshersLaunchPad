const fs = require('fs');
let content = fs.readFileSync('src/components/MockInterview.tsx', 'utf-8');

const oldSpeechLogic = `    recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      
      if (finalTranscript !== '') {
        existingTextRef.current = (existingTextRef.current + ' ' + finalTranscript).trim();
      }
      
      const currentText = (existingTextRef.current + ' ' + interimTranscript).trim();
      setTranscript(currentText);
    };`;

const newSpeechLogic = `    recognition.onresult = (event: any) => {
      let sessionTranscript = '';
      for (let i = 0; i < event.results.length; ++i) {
        sessionTranscript += event.results[i][0].transcript;
      }
      
      const currentText = (existingTextRef.current + ' ' + sessionTranscript).trim();
      setTranscript(currentText);
    };`;

if (content.includes("let interimTranscript = '';")) {
  content = content.replace(oldSpeechLogic, newSpeechLogic);
  fs.writeFileSync('src/components/MockInterview.tsx', content);
  console.log("Fixed SpeechRecognition logic");
} else {
  console.log("Could not find old SpeechRecognition logic");
}
