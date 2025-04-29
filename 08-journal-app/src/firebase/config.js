// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCD7NryXT7bPk92OJHpnFHdSMZ0PS6ci0",
  authDomain: "react-curso-ec1dd.firebaseapp.com",
  projectId: "react-curso-ec1dd",
  storageBucket: "react-curso-ec1dd.firebasestorage.app",
  messagingSenderId: "1021098268114",
  appId: "1:1021098268114:web:a9fb9a19a92a2ac8baa40b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// Login
export const FireBaseAuth = getAuth(FirebaseApp)
// BBDD
export const FirebaseDB = getFirestore(FirebaseApp)

