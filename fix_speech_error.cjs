const fs = require('fs');
let content = fs.readFileSync('src/components/MockInterview.tsx', 'utf-8');

const oldCode = `      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        if (event.error !== 'no-speech') {
          setIsRecording(false);
        }
      };`;

const newCode = `      recognition.onerror = (event: any) => {
        if (event.error === 'no-speech') {
          return;
        }
        console.error("Speech recognition error", event.error);
        setIsRecording(false);
      };`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/components/MockInterview.tsx', content);
