import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5A6HSZKU2F-ZGi3qgUx1tVIE9KlBIWqY",
  authDomain: "music-haven.firebaseapp.com",
  projectId: "music-haven",
  storageBucket: "music-haven.appspot.com",
  messagingSenderId: "498830967750",
  appId: "1:498830967750:web:a52d6b6f4caf38fa9b68c7"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app