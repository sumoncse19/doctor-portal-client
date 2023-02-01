// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkltwKWzyQJ3bfym9fGc7LLPnaqWAjDEA",
  authDomain: "genius-car-update.firebaseapp.com",
  projectId: "genius-car-update",
  storageBucket: "genius-car-update.appspot.com",
  messagingSenderId: "925491152629",
  appId: "1:925491152629:web:8f4f980662681d60e6a7bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;