// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAntYVfDTt73Kngy3QUeDo6RTtgvdbeNz0",
  authDomain: "photo-memoria.firebaseapp.com",
  projectId: "photo-memoria",
  storageBucket: "photo-memoria.appspot.com",
  messagingSenderId: "835202039961",
  appId: "1:835202039961:web:74acbb2aec7e72d7a07808",
  measurementId: "G-RJ6PRWHFJ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
