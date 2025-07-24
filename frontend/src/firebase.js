// src/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDH_igqTToX1RThbEh1uDORuL3eToUdN7M",
  authDomain: "harsh-studio-5a8a5.firebaseapp.com",
  projectId: "harsh-studio-5a8a5",
  storageBucket: "harsh-studio-5a8a5.firebasestorage.app",
  messagingSenderId: "79489056205",
  appId: "1:79489056205:web:55d16423c0dee225621884",
  measurementId: "G-GJ85FGG9H6"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
