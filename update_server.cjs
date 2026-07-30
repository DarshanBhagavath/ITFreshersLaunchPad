const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf-8');

if (!content.includes('LinkedIn: ${userDetails.linkedInUrl')) {
  content = content.replace('Certifications: ${userDetails.certifications || "None provided"}', 'Certifications: ${userDetails.certifications || "None provided"}\nLinkedIn: ${userDetails.linkedInUrl || "None provided"}');
  
  content = content.replace('1. Contact Information', '1. Contact Information (include LinkedIn URL if provided)');
  fs.writeFileSync('server.ts', content);
  console.log("Updated server.ts for LinkedIn");
} else {
  console.log("Already updated");
}
