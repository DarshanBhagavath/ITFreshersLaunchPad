const fs = require('fs');
let content = fs.readFileSync('src/components/Auth.tsx', 'utf-8');

const oldCatchSignup = `    } catch (err: any) {
      console.error(err);
      let errorMessage = "Error signing up: " + (err.message || "");
      if (err.code === 'auth/email-already-in-use') {
        errorMessage = "This email is already registered. Please log in instead.";
        setMode('login');
      } else if (err.code === 'auth/operation-not-allowed') {
        errorMessage = "Email/Password sign-in is not enabled. Please enable it in the Firebase Console.";
      }
      setError(errorMessage);
    } finally {`;

const newCatchSignup = `    } catch (err: any) {
      let errorMessage = "Error signing up. Please try again.";
      if (err.code === 'auth/email-already-in-use' || (err.message && err.message.includes('email-already-in-use'))) {
        errorMessage = "This email is already registered. Please log in instead.";
      } else if (err.code === 'auth/operation-not-allowed') {
        errorMessage = "Email/Password sign-in is not enabled. Please enable it in the Firebase Console.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {`;
content = content.replace(oldCatchSignup, newCatchSignup);

content = content.replace(/console\.error\(err\);/g, '');
content = content.replace(/console\.error\(error\);/g, '');

fs.writeFileSync('src/components/Auth.tsx', content);
