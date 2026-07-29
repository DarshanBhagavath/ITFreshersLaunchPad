const fs = require('fs');
let content = fs.readFileSync('src/components/Auth.tsx', 'utf-8');

// Update initial state
const oldState = `  const [details, setDetails] = useState<UserDetails>({
    fullName: "",
    phoneNumber: "",
    emailId: "",
    address: "",
    highestEducation: "",
    stream: "",
    workHistory: "",
    skills: "",
    projects: "",
    certifications: "",
  });`;

const newState = `  const [details, setDetails] = useState<UserDetails>({
    fullName: "",
    phoneNumber: "",
    emailId: "",
    address: "",
    highestEducation: "",
    stream: "",
    skills: "",
    projects: "",
    certifications: "",
  });`;

content = content.replace(oldState, newState);

// Update checkUserDocument
const oldCheck = `    if (docSnap.exists()) {
      const userData = docSnap.data() as UserDetails;
      if (!userData.workHistory && userData.workHistory !== "") {
        // Needs update
        setUserAuth(user);
        setDetails({ ...userData, workHistory: "", skills: "", projects: "", certifications: "" });
        setMode('complete_profile');
      } else {
        onAuthSuccess(user, userData);
      }
    } else {`;

const newCheck = `    if (docSnap.exists()) {
      const userData = docSnap.data() as UserDetails;
      if (!userData.skills && userData.skills !== "") {
        // Needs update
        setUserAuth(user);
        setDetails({ ...userData, skills: "", projects: "", certifications: "" });
        setMode('complete_profile');
      } else {
        onAuthSuccess(user, userData);
      }
    } else {`;

content = content.replace(oldCheck, newCheck);

// Remove the textarea
const oldTextarea = `            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Work History / Internships</label>
              <textarea name="workHistory" value={details.workHistory} onChange={handleChange as any} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Details about your past work or internships..." rows={2}></textarea>
            </div>`;

content = content.replace(oldTextarea, "");

fs.writeFileSync('src/components/Auth.tsx', content);
