// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOvgEH4Qcdaep3zPTzoUccPhh2LpqMdAQ",
  authDomain: "netflixgpt-55177.firebaseapp.com",
  projectId: "netflixgpt-55177",
  storageBucket: "netflixgpt-55177.appspot.com",
  messagingSenderId: "844861722631",
  appId: "1:844861722631:web:5f79ca81fe2789d9cbdaa2",
  measurementId: "G-WCK2RJSRRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
