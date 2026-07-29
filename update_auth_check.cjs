const fs = require('fs');
let content = fs.readFileSync('src/components/Auth.tsx', 'utf-8');

const oldCheck = `  const checkUserDocument = async (user: any) => {
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const userData = docSnap.data() as UserDetails;
      onAuthSuccess(user, userData);
    } else {
      setUserAuth(user);
      setDetails(prev => ({ ...prev, emailId: user.email || '', fullName: user.displayName || '' }));
      setMode('complete_profile');
    }
  };`;

const newCheck = `  const checkUserDocument = async (user: any) => {
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const userData = docSnap.data() as UserDetails;
      if (!userData.workHistory && userData.workHistory !== "") {
        // Needs update
        setUserAuth(user);
        setDetails({ ...userData, workHistory: "", skills: "", projects: "", certifications: "" });
        setMode('complete_profile');
      } else {
        onAuthSuccess(user, userData);
      }
    } else {
      setUserAuth(user);
      setDetails(prev => ({ ...prev, emailId: user.email || '', fullName: user.displayName || '' }));
      setMode('complete_profile');
    }
  };`;

content = content.replace(oldCheck, newCheck);
fs.writeFileSync('src/components/Auth.tsx', content);
