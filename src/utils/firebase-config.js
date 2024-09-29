// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnrh7zjojMM9UIU9ZvdXqZ6G7rsgBBB9g",
  authDomain: "streaming-4cb58.firebaseapp.com",
  projectId: "streaming-4cb58",
  storageBucket: "streaming-4cb58.appspot.com",
  messagingSenderId: "106011527433",
  appId: "1:106011527433:web:2dcef2b0590804bdcfabd8",
  measurementId: "G-HTFKV0LTN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)