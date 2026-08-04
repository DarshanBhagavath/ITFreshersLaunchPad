const fs = require('fs');

let mock = fs.readFileSync('src/components/MockInterview.tsx', 'utf8');
mock = mock.replace(/let data = \{\};/g, 'let data: any = {};');
fs.writeFileSync('src/components/MockInterview.tsx', mock);

let resume = fs.readFileSync('src/components/ResumeBuilder.tsx', 'utf8');
resume = resume.replace(/let data = \{\};/g, 'let data: any = {};');
fs.writeFileSync('src/components/ResumeBuilder.tsx', resume);
