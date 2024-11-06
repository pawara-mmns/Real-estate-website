// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-d7941.firebaseapp.com",
  projectId: "real-estate-d7941",
  storageBucket: "real-estate-d7941.firebasestorage.app",
  messagingSenderId: "280581590252",
  appId: "1:280581590252:web:9d615a3c038fa1b43669c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);