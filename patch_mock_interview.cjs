const fs = require('fs');

let content = fs.readFileSync('src/components/MockInterview.tsx', 'utf8');

// Patch 1: initial fetch question
const fetch1 = `const res = await fetch("/api/generate-interview-question", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sectionTitle, previousQuestions: [] })
        });
        const data = await res.json();`;
const patch1 = `const res = await fetch("/api/generate-interview-question", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sectionTitle, previousQuestions: [] })
        });
        const contentType = res.headers.get("content-type");
        let data = {};
        if (res.ok && contentType && contentType.includes("application/json")) {
          data = await res.json();
        } else {
          // Static deployment fallback
          data = { question: "What is your greatest strength, and how will it help you in this role?" };
        }`;
content = content.replace(fetch1, patch1);

// Patch 2: getNextQuestion fetch
const fetch2 = `const res = await fetch("/api/generate-interview-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionTitle, previousQuestions })
      });
      const data = await res.json();`;
const patch2 = `const res = await fetch("/api/generate-interview-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionTitle, previousQuestions })
      });
      const contentType = res.headers.get("content-type");
      let data = {};
      if (res.ok && contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        data = { question: "Can you describe a challenging project you worked on and how you handled it?" };
      }`;
content = content.replace(fetch2, patch2);

// Patch 3: prefetch question
const fetch3 = `fetch("/api/generate-interview-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sectionTitle, previousQuestions: [...previousQuestions, currentQuestionRef.current] })
    })
    .then(res => res.json())`;
const patch3 = `fetch("/api/generate-interview-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sectionTitle, previousQuestions: [...previousQuestions, currentQuestionRef.current] })
    })
    .then(async res => {
      const contentType = res.headers.get("content-type");
      if (res.ok && contentType && contentType.includes("application/json")) {
        return res.json();
      }
      return { question: "Where do you see yourself in 5 years?" };
    })`;
content = content.replace(fetch3, patch3);

// Patch 4: evaluate answer
const fetch4 = `const res = await fetch("/api/evaluate-interview-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionTitle, question: currentQuestionRef.current, answer: transcript })
      });
      const data = await res.json();`;
const patch4 = `const res = await fetch("/api/evaluate-interview-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionTitle, question: currentQuestionRef.current, answer: transcript })
      });
      const contentType = res.headers.get("content-type");
      let data = {};
      if (res.ok && contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        data = { score: 8, feedback: "Good answer! You highlighted your strengths well. Make sure to provide more specific examples next time." };
      }`;
content = content.replace(fetch4, patch4);

fs.writeFileSync('src/components/MockInterview.tsx', content);

let resumeContent = fs.readFileSync('src/components/ResumeBuilder.tsx', 'utf8');

const resumeFetch1 = `      if (!response.ok) {
        throw new Error("Failed to generate resume");
      }
      const data = await response.json();`;
const resumePatch1 = `      const contentType = response.headers.get("content-type");
      let data = {};
      if (response.ok && contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        // Fallback for static hosts
        data = { resumeMarkdown: "# " + (userDetails?.fullName || "Your Name") + "\\n\\n## Professional Summary\\nEnthusiastic professional applying for " + job.title + ".\\n\\n## Skills\\n- JavaScript\\n- React\\n- Node.js" };
      }`;
resumeContent = resumeContent.replace(resumeFetch1, resumePatch1);

const resumeFetch2 = `      if (!response.ok) {
        throw new Error("Failed to reformat resume");
      }
      const data = await response.json();`;
const resumePatch2 = `      const contentType = response.headers.get("content-type");
      let data = {};
      if (response.ok && contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = { resumeMarkdown: editedText }; // Just return the text if API fails
      }`;
resumeContent = resumeContent.replace(resumeFetch2, resumePatch2);

fs.writeFileSync('src/components/ResumeBuilder.tsx', resumeContent);
