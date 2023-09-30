// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWcVP6JGhlIaJCO_N1iiv-HVKIkTdj-gE",
  authDomain: "fir-dcbb2.firebaseapp.com",
  databaseURL: "https://fir-dcbb2-default-rtdb.firebaseio.com",
  projectId: "fir-dcbb2",
  storageBucket: "fir-dcbb2.appspot.com",
  messagingSenderId: "813639401328",
  appId: "1:813639401328:web:7fff6cb8ce819b7c9559b5",
  measurementId: "G-13PR53M3NQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);