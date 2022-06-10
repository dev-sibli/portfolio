// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD-9d-LGg01WafMHKpH-Ksk9TIU0OBVQA",
    authDomain: "sibli-portfolio.firebaseapp.com",
    projectId: "sibli-portfolio",
    storageBucket: "sibli-portfolio.appspot.com",
    messagingSenderId: "546534803988",
    appId: "1:546534803988:web:7a48eb2a8625b3137f3501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;