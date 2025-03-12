// Import Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Your Firebase configuration (Keep this secret in a .env file for security)
const firebaseConfig = {
  apiKey: "AIzaSyDtgRMU-d_h77xU57rFcobZtg_VMDHlvug",
  authDomain: "uiren-d8b6a.firebaseapp.com",
  projectId: "uiren-d8b6a",
  storageBucket: "uiren-d8b6a.appspot.com",
  messagingSenderId: "771996525746",
  appId: "1:771996525746:web:9b81d254f7d15931ab55ab",
  measurementId: "G-VGV5BVH0WV",
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Services
const auth = getAuth(app); // Authentication Service
const db = getFirestore(app); // Firestore Database
const storage = getStorage(app); // Storage Service

// ✅ Export services for use in other parts of the app
export { app, auth, db, storage };
