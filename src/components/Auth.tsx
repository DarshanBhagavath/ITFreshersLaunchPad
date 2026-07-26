import React, { useState } from 'react';
import { auth, db } from '../lib/firebase';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail,
  sendEmailVerification 
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { UserDetails } from '../types';
import { GraduationCap, Loader2, Mail, Lock, AlertCircle, CheckCircle2 } from 'lucide-react';

interface AuthProps {
  onAuthSuccess: (user: any, details: UserDetails | null) => void;
}

type AuthMode = 'login' | 'signup' | 'forgot_password' | 'complete_profile';

export function Auth({ onAuthSuccess }: AuthProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [userAuth, setUserAuth] = useState<any>(null);
  
  // Auth Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  
  const [details, setDetails] = useState<UserDetails>({
    fullName: "",
    phoneNumber: "",
    emailId: "",
    address: "",
    highestEducation: "",
    stream: "",
  });

  const checkUserDocument = async (user: any) => {
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
  };

  const handleGoogleLogin = async () => {
    setError('');
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await checkUserDocument(result.user);
    } catch (err: any) {
      console.error(err);
      let errorMessage = "Error logging in with Google";
      if (err.code === 'auth/operation-not-allowed') {
        errorMessage = "Google login is not enabled. Please enable it in the Firebase Console.";
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    
    setIsLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // Send successful signup / verification email
      await sendEmailVerification(result.user);
      await checkUserDocument(result.user);
    } catch (err: any) {
      console.error(err);
      let errorMessage = "Error signing up";
      if (err.code === 'auth/email-already-in-use') {
        errorMessage = "This email is already registered. Please log in instead.";
      } else if (err.code === 'auth/operation-not-allowed') {
        errorMessage = "Email/Password sign-in is not enabled. Please enable it in the Firebase Console.";
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    
    setIsLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await checkUserDocument(result.user);
    } catch (err: any) {
      console.error(err);
      let errorMessage = "Invalid email or password";
      if (err.code === 'auth/user-not-found') {
        errorMessage = "No user found with this email. Please sign up.";
      } else if (err.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password. Please try again.";
      } else if (err.code === 'auth/operation-not-allowed') {
        errorMessage = "Email/Password sign-in is not enabled. Please enable it in the Firebase Console.";
      } else if (err.code === 'auth/invalid-credential') {
        errorMessage = "Invalid credentials. Please try again.";
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    
    if (!email) {
      return setError("Please enter your email address");
    }
    
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error sending reset email");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAuth) return;
    
    setIsLoading(true);
    try {
      const docRef = doc(db, 'users', userAuth.uid);
      await setDoc(docRef, details);
      onAuthSuccess(userAuth, details);
    } catch (error) {
      console.error(error);
      alert("Error saving details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  if (mode === 'complete_profile') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-xl shadow-xl p-8 border border-gray-100">
          <div className="flex justify-center mb-6 text-indigo-600">
            <GraduationCap className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Complete Your Profile</h2>
          <p className="text-center text-gray-600 mb-8">Please provide your details to finish signing up.</p>
          
          <form onSubmit={handleSignupSubmit} className="space-y-4">
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Stream</label>
                <input required type="text" name="stream" value={details.stream} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Computer Science" />
              </div>
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full mt-6 bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
              Complete Signup
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl p-8 border border-gray-100">
        <div className="flex justify-center mb-6 text-indigo-600">
          <GraduationCap className="w-16 h-16" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          {mode === 'login' ? 'Welcome Back' : mode === 'signup' ? 'Create Account' : 'Reset Password'}
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          {mode === 'login' ? 'Sign in to your account' : mode === 'signup' ? 'Join IT Fresher Launchpad today' : 'Enter your email to receive a reset link'}
        </p>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg flex items-start gap-2 text-sm">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {message && (
          <div className="mb-6 p-3 bg-green-50 text-green-700 border border-green-200 rounded-lg flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{message}</span>
          </div>
        )}
        
        {mode !== 'forgot_password' && (
          <>
            <button 
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full bg-white text-gray-700 font-medium py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-3 mb-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with email</span>
              </div>
            </div>
          </>
        )}

        <form onSubmit={mode === 'login' ? handleEmailLogin : mode === 'signup' ? handleEmailSignup : handleForgotPassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
                placeholder="you@example.com" 
              />
            </div>
          </div>
          
          {mode !== 'forgot_password' && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                {mode === 'login' && (
                  <button 
                    type="button" 
                    onClick={() => { setMode('forgot_password'); setError(''); setMessage(''); }}
                    className="text-xs text-indigo-600 hover:text-indigo-800"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
                  placeholder="••••••••" 
                />
              </div>
            </div>
          )}

          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-10 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
                  placeholder="••••••••" 
                />
              </div>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white font-medium py-2.5 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2 mt-6"
          >
            {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
            {mode === 'login' ? 'Sign In' : mode === 'signup' ? 'Create Account' : 'Send Reset Link'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => { setMode('signup'); setError(''); setMessage(''); }} className="text-indigo-600 font-medium hover:underline">
                Sign up
              </button>
            </p>
          ) : (
            <p>
              {mode === 'forgot_password' ? 'Remember your password? ' : 'Already have an account? '}
              <button onClick={() => { setMode('login'); setError(''); setMessage(''); }} className="text-indigo-600 font-medium hover:underline">
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

