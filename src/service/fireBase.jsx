// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmwSMzNHgzX5lw3xR9VHjLLg1cio1jr_8",
  authDomain: "apolo-react-coder.firebaseapp.com",
  projectId: "apolo-react-coder",
  storageBucket: "apolo-react-coder.firebasestorage.app",
  messagingSenderId: "827304399946",
  appId: "1:827304399946:web:12ce902a60bd796e3582b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };