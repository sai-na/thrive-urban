// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALNMotC7Vv7ez_ioGAb1MbZYOZbrCUDdo",
  authDomain: "test-44e25.firebaseapp.com",
  projectId: "test-44e25",
  storageBucket: "test-44e25.appspot.com",
  messagingSenderId: "686551071696",
  appId: "1:686551071696:web:22c57a7e364512f83d97d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
