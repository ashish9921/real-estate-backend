// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ashish-37c96.firebaseapp.com",
  projectId: "ashish-37c96",
  storageBucket: "ashish-37c96.appspot.com",
  messagingSenderId: "424879060074",
  appId: "1:424879060074:web:239bb0cf940c0573574613",
  measurementId: "G-4NJNPE5RL8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
