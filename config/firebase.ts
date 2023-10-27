// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArFpIUL93aTeQ5OLn12HcCRS_WFxHg7Ms",
  authDomain: "amorcar-3fc1c.firebaseapp.com",
  projectId: "amorcar-3fc1c",
  storageBucket: "amorcar-3fc1c.appspot.com",
  messagingSenderId: "142163097150",
  appId: "1:142163097150:web:10cd246067677677fd036f",
  measurementId: "G-DW891N83T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}