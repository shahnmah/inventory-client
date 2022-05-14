// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT4UCq-24EKwx9k3p3J7_A_-mhdXDY4mw",
  authDomain: "inventory-website-2239c.firebaseapp.com",
  projectId: "inventory-website-2239c",
  storageBucket: "inventory-website-2239c.appspot.com",
  messagingSenderId: "225167836158",
  appId: "1:225167836158:web:3345a70299293af157f6af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;