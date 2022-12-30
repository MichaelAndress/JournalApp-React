// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAET8YW7n-EsWuQT8FPkwcaqonW_P9U-Zk",
  authDomain: "react-curso-14408.firebaseapp.com",
  projectId: "react-curso-14408",
  storageBucket: "react-curso-14408.appspot.com",
  messagingSenderId: "570153973026",
  appId: "1:570153973026:web:38f098307ac0bc854b217b"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );