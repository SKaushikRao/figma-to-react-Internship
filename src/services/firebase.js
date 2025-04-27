// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMlNsov3aE6uwT7ebibEGWPq1korTmR5k",
  authDomain: "mujthriftz-ea0cd.firebaseapp.com",
  projectId: "mujthriftz-ea0cd",
  storageBucket: "mujthriftz-ea0cd.firebasestorage.app",
  messagingSenderId: "322593465681",
  appId: "1:322593465681:web:6514ae555451fb88739f70",
  measurementId: "G-BFL3D37TZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize auth
export const auth = getAuth(app);

// Google authentication provider
const googleProvider = new GoogleAuthProvider();

// Sign in with Google function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export default app;