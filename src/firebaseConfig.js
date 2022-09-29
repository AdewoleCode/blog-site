import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDW0J3k8B3k_-tL_B0961ul0pLTjAy3A-M",
    authDomain: "blog-app-4b575.firebaseapp.com",
    projectId: "blog-app-4b575",
    storageBucket: "blog-app-4b575.appspot.com",
    messagingSenderId: "901291796552",
    appId: "1:901291796552:web:9f4b01e07180028d54507d"
  };

  const app = initializeApp(firebaseConfig)
  

  export const storage = getStorage();
  export const db = getFirestore();