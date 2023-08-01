// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-8od_x3DuHwtXCAfPvQJrdJ8j53T-qKE",
  authDomain: "todo-79707.firebaseapp.com",
  projectId: "todo-79707",
  storageBucket: "todo-79707.appspot.com",
  messagingSenderId: "742530643649",
  appId: "1:742530643649:web:f7533b1d4b7ab21ce5c640",
  measurementId: "G-7WF21F4RER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)