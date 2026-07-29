const fs = require('fs');
let content = fs.readFileSync('src/components/Auth.tsx', 'utf-8');

const oldCatch = `    } catch (err: any) {
      console.error(err);
      let errorMessage = "Error signing up";
      if (err.code === 'auth/email-already-in-use') {
        errorMessage = "This email is already registered. Please log in instead.";
      } else if (err.code === 'auth/operation-not-allowed') {
        errorMessage = "Email/Password sign-in is not enabled. Please enable it in the Firebase Console.";
      }
      setError(errorMessage);
    } finally {`;

const newCatch = `    } catch (err: any) {
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

content = content.replace(oldCatch, newCatch);
fs.writeFileSync('src/components/Auth.tsx', content);
