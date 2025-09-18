import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXeO3nyR1jJU0d6D6ZdxQKqYh3Uc1OOiY",
  authDomain: "cerimonal-organizada.firebaseapp.com",
  projectId: "cerimonal-organizada",
  storageBucket: "cerimonal-organizada.firebasestorage.app",
  messagingSenderId: "1050432070384",
  appId: "1:1050432070384:web:6e11ac15e14d488cf35835",
  measurementId: "G-PDZ3BH973Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;