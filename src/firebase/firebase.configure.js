// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAssV35NBYryo8E5fZ61NFiv0wzuT4JQVU",
  authDomain: "b610-learning-platform-63ff1.firebaseapp.com",
  projectId: "b610-learning-platform-63ff1",
  storageBucket: "b610-learning-platform-63ff1.appspot.com",
  messagingSenderId: "35402871289",
  appId: "1:35402871289:web:19cd04af3ce0a63ab64d28",
  measurementId: "G-5881NPTYZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;