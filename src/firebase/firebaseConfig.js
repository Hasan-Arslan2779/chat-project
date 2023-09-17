// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// ! Yetkilendirme İçin gerekli importantslar
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFo5cQ0QwwkkCxqggx5Qmfg59ZwuCg-7c",
  authDomain: "chat-boot-f51f1.firebaseapp.com",
  projectId: "chat-boot-f51f1",
  storageBucket: "chat-boot-f51f1.appspot.com",
  messagingSenderId: "988991908403",
  appId: "1:988991908403:web:5e6ea404a5c341f00d5146",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Yetkilendirme için gerekli kurulum
export const auth = getAuth(app);
//! Google sağlayıcısı Kurulumu
export const provider = new GoogleAuthProvider();
// ! Veri tabanı kurulumu
export const db = getFirestore(app);
