const fs = require('fs');
let content = fs.readFileSync('src/components/Auth.tsx', 'utf-8');

if (!content.includes('linkedInUrl: ""')) {
  content = content.replace('certifications: "",', 'certifications: "",\n    linkedInUrl: "",');
}

if (!content.includes('name="linkedInUrl"')) {
  const insertStr = `
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile URL</label>
              <input type="url" name="linkedInUrl" value={details.linkedInUrl || ''} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://linkedin.com/in/yourprofile" />
            </div>
`;
  content = content.replace('<div>\n              <label className="block text-sm font-medium text-gray-700 mb-1">Certifications</label>', insertStr + '            <div>\n              <label className="block text-sm font-medium text-gray-700 mb-1">Certifications</label>');
  fs.writeFileSync('src/components/Auth.tsx', content);
  console.log("Updated Auth.tsx for LinkedIn URL");
} else {
  console.log("Already updated");
}
