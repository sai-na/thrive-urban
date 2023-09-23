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
  apiKey: "AIzaSyCaRUpjz_7b_P0JIVzs25p4G__j2c0jE8Q",
  authDomain: "thrive-urban-9d119.firebaseapp.com",
  projectId: "thrive-urban-9d119",
  storageBucket: "thrive-urban-9d119.appspot.com",
  messagingSenderId: "432231047452",
  appId: "1:432231047452:web:a32a7203d1fd75adf4dad9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;