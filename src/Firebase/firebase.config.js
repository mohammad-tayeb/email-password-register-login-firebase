// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo49tchhgRpHHvXpvq9CN2FVwzH5fFz7s",
  authDomain: "email-password-auth-4e94d.firebaseapp.com",
  projectId: "email-password-auth-4e94d",
  storageBucket: "email-password-auth-4e94d.firebasestorage.app",
  messagingSenderId: "599309895629",
  appId: "1:599309895629:web:d01d95b766c02d194aa684"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default auth;