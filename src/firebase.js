// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5St35KYuOZHpSifi0UrF9wnOTL4LkZ8Y",
  authDomain: "realtor-11acd.firebaseapp.com",
  projectId: "realtor-11acd",
  storageBucket: "realtor-11acd.appspot.com",
  messagingSenderId: "969411484141",
  appId: "1:969411484141:web:7aaf0078fdc47a48016fe4",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
