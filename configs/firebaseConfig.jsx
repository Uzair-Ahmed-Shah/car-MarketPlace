// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-402de.firebaseapp.com",
  projectId: "car-marketplace-402de",
  storageBucket: "car-marketplace-402de.firebasestorage.app",
  messagingSenderId: "953791650583",
  appId: "1:953791650583:web:1dcd6c6ab9a1216436b552",
  measurementId: "G-LLFX9E4C8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)