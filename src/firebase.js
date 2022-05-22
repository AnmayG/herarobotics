import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYpis5_Jz0aDaT_OyT9szWmoOTbJaydpw",
  authDomain: "harkoerobotics.firebaseapp.com",
  projectId: "harkoerobotics",
  storageBucket: "harkoerobotics.appspot.com",
  messagingSenderId: "741566852043",
  appId: "1:741566852043:web:a5d0db0ef0ccce2809644e",
  measurementId: "G-MSTYR8TW6H"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const rdb = firebaseApp.database();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { auth, db, rdb, storage };
