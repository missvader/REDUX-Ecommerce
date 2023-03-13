// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBWlz26dNE-eneSUHkcdqDpeelaYf9ddkk",
  authDomain: "swapp-7ff47.firebaseapp.com",
  databaseURL: "https://swapp-7ff47-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "swapp-7ff47",
  storageBucket: "swapp-7ff47.appspot.com",
  messagingSenderId: "918833195236",
  appId: "1:918833195236:web:a2cdd9070b93f4ce9ba4f1",
  measurementId: "G-FG96CPP15B"
};

//const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app