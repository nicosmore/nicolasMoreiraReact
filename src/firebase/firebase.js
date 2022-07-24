import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCTxrnGtqJvCcrosBCtuu__pZZnWF9ToY",
  authDomain: "proyectoreact-8459a.firebaseapp.com",
  projectId: "proyectoreact-8459a",
  storageBucket: "proyectoreact-8459a.appspot.com",
  messagingSenderId: "410387131942",
  appId: "1:410387131942:web:b78a4359593afdbad680e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);