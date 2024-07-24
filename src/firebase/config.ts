// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7DzdyKVY_cDKH0uOXCYTaSSHJZNiH0mI",
    authDomain: "eis-que-tournament.firebaseapp.com",
    projectId: "eis-que-tournament",
    storageBucket: "eis-que-tournament.appspot.com",
    messagingSenderId: "78563396083",
    appId: "1:78563396083:web:672fe565b1d8eaafc6aa86",
    measurementId: "G-9931WR8MT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};