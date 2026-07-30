const fs = require('fs');
let content = fs.readFileSync('src/types.ts', 'utf-8');

if (!content.includes('linkedInUrl?: string;')) {
  content = content.replace('certifications: string;', 'certifications: string;\n  linkedInUrl?: string;');
  fs.writeFileSync('src/types.ts', content);
  console.log("Added linkedInUrl to UserDetails");
}
