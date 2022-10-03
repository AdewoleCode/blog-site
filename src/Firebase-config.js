import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB7c6OMGLitABXUVKTIT7_zKWEyY1tIYn8",
  authDomain: "blog2-28417.firebaseapp.com",
  projectId: "blog2-28417",
  storageBucket: "blog2-28417.appspot.com",
  messagingSenderId: "758455632781",
  appId: "1:758455632781:web:8d48aede13b179050c33c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

export const auth = getAuth(app);
export const db = getFirestore(app)

export const provider = new GoogleAuthProvider();