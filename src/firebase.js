import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKQNwhSZA9A4h0MDf64HzH-saqtSqtyII",
  authDomain: "storeapp-91b6b.firebaseapp.com",
  projectId: "storeapp-91b6b",
  storageBucket: "storeapp-91b6b.appspot.com",
  messagingSenderId: "577194463778",
  appId: "1:577194463778:web:181a71e13d19cecce6f07b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

