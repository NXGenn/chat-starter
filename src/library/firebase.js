// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chattu-6fbca.firebaseapp.com",
  projectId: "chattu-6fbca",
  storageBucket: "chattu-6fbca.appspot.com",
  messagingSenderId: "832490784788",
  appId: "1:832490784788:web:064d789d59a45f196aff01",
  measurementId: "G-TLXB3BKVV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();