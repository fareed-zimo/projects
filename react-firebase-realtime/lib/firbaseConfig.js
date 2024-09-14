import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBI_KfkIMGjCiuAG7uRYgCGss2eFh52l7c",
  authDomain: "fir-tut-166ab.firebaseapp.com",
  databaseURL:
    "https://fir-tut-166ab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-tut-166ab",
  storageBucket: "fir-tut-166ab.appspot.com",
  messagingSenderId: "270430435039",
  appId: "1:270430435039:web:0cd50ae72db72017e4db6a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
