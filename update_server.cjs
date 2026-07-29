const fs = require('fs');

let content = fs.readFileSync('server.ts', 'utf-8');

const oldPrompt = `    const prompt = \`You are an expert Resume writer. I need you to generate a professional resume customized for a specific job description.
    
Here are the user details:
Name: \${userDetails.fullName}
Phone: \${userDetails.phoneNumber}
Email: \${userDetails.emailId}
Address: \${userDetails.address}
Highest Education: \${userDetails.highestEducation}
Stream/Major: \${userDetails.stream}

Here is the job description they are applying for:
\${jobDescription}

Please generate the content for a tailored resume. Include:
1. Contact Information
2. Professional Summary (tailored to the job description)
3. Education
4. Skills (Highlight skills relevant to the job description, assuming standard skills for a fresher in this stream)
5. Projects / Academic Experience (Invent 2-3 plausible academic projects that fit their stream and the job requirements)
6. Certifications or Extracurriculars (plausible general ones)

Output the resume entirely in Markdown format. Do NOT wrap it in a code block or use \\\`\\\`\\\`markdown, just output the raw Markdown text.\`;`;

const newPrompt = `    const prompt = \`You are an expert Resume writer. I need you to generate a professional resume customized for a specific job description.
    
Here are the user details:
Name: \${userDetails.fullName}
Phone: \${userDetails.phoneNumber}
Email: \${userDetails.emailId}
Address: \${userDetails.address}
Highest Education: \${userDetails.highestEducation}
Stream/Major: \${userDetails.stream}
Work History: \${userDetails.workHistory || "None provided"}
Skills: \${userDetails.skills || "None provided"}
Projects: \${userDetails.projects || "None provided"}
Certifications: \${userDetails.certifications || "None provided"}

Here is the job description they are applying for:
\${jobDescription}

Please generate the content for a tailored resume. Include:
1. Contact Information
2. Professional Summary (tailored to the job description and leveraging their provided skills/experience)
3. Education
4. Work History / Internships (use the provided details)
5. Skills (Highlight provided skills relevant to the job description, add standard skills if needed)
6. Projects / Academic Experience (use the provided projects, adapt them to the job if possible)
7. Certifications (use the provided certifications)

Output the resume entirely in Markdown format. Do NOT wrap it in a code block or use \\\`\\\`\\\`markdown, just output the raw Markdown text.\`;`;

content = content.replace(oldPrompt, newPrompt);
fs.writeFileSync('server.ts', content);
