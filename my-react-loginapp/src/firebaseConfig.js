import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxkzFFHJw0Y2kky5Y-O3Wq3dDxp5XcsT4",
    authDomain: "react-login-page-50b4e.firebaseapp.com",
    projectId: "react-login-page-50b4e",
    storageBucket: "react-login-page-50b4e.firebasestorage.app",
    messagingSenderId: "253335209321",
    appId: "1:253335209321:web:adedb15334b57c8cb0e9f8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
