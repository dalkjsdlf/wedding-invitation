import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
/* 데이터베이스(firestore) 사용을 위한 import */

//use your firebase info
const firebaseConfig = {
  apiKey: "AIzaSyDW27X92vGWqfYy2ZjBhXIGKYz9Os2mu1U",
  authDomain: "wedding-invitation-75a55.firebaseapp.com",
  projectId: "wedding-invitation-75a55",
  storageBucket: "wedding-invitation-75a55.appspot.com",
  messagingSenderId: "579217290649",
  appId: "1:579217290649:web:75400d7d154cc455708f08",
  measurementId: "G-RP4M1TZ7MZ"
};
export const app        = initializeApp(firebaseConfig);
export const db         = getFirestore(app);
