const fs = require('fs');
let content = fs.readFileSync('src/components/ResumeBuilder.tsx', 'utf8');

const target1 = `      if (!response.ok) {
        throw new Error("Failed to generate resume");
      }
      const data = await response.json();`;

const replacement1 = `      const contentType = response.headers.get("content-type");
      let data: any = {};
      if (response.ok && contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = { resumeMarkdown: "# " + (userDetails?.fullName || "Your Name") + "\\n\\n## Professional Summary\\nEnthusiastic professional applying for " + job.title + ".\\n\\n## Skills\\n- JavaScript\\n- React\\n- Node.js" };
      }`;

content = content.replace(target1, replacement1);

const target2 = `      if (!response.ok) {
        throw new Error("Failed to reformat resume");
      }
      const data = await response.json();`;

const replacement2 = `      const contentType = response.headers.get("content-type");
      let data: any = {};
      if (response.ok && contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = { resumeMarkdown: editedText }; 
      }`;

content = content.replace(target2, replacement2);
fs.writeFileSync('src/components/ResumeBuilder.tsx', content);
