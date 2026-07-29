const fs = require('fs');

let content = fs.readFileSync('src/components/Auth.tsx', 'utf-8');

const regex = /<form onSubmit=\{handleSignupSubmit\} className="space-y-4">[\s\S]*?(?=<button\s+type="submit"\s+disabled=\{isLoading\})/m;

const newInputs = `<form onSubmit={handleSignupSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input required type="text" name="fullName" value={details.fullName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" name="phoneNumber" value={details.phoneNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="+91 9876543210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                <input required type="email" name="emailId" value={details.emailId} readOnly className="w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-lg outline-none text-gray-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input required type="text" name="address" value={details.address} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="City, State" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Highest Education</label>
                <input required type="text" name="highestEducation" value={details.highestEducation} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="B.E. / B.Tech" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stream / Major</label>
                <input required type="text" name="stream" value={details.stream} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Computer Science" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Work History / Internships</label>
              <textarea name="workHistory" value={details.workHistory} onChange={handleChange as any} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Details about your past work or internships..." rows={2}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Skill Sets</label>
              <textarea name="skills" value={details.skills} onChange={handleChange as any} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="React, Node.js, Python..." rows={2}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Projects</label>
              <textarea name="projects" value={details.projects} onChange={handleChange as any} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Details about your academic or personal projects..." rows={2}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Certifications</label>
              <textarea name="certifications" value={details.certifications} onChange={handleChange as any} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="AWS Certified, Coursera..." rows={2}></textarea>
            </div>
            `;

content = content.replace(regex, newInputs);
fs.writeFileSync('src/components/Auth.tsx', content);
