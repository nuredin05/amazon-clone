import { initializeApp } from "firebase/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
// import { getFirestore} from "firebase/firestore";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQLYIbfAhNqUkhDJs0UvWonR3hVNKi75M",
  authDomain: "clone-65e67.firebaseapp.com",
  projectId: "clone-65e67",
  storageBucket: "clone-65e67.firebasestorage.app",
  messagingSenderId: "818624675299",
  appId: "1:818624675299:web:b3c6a072ba92f72b93f4d6",
  measurementId: "G-E6YYKCW058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
const db=getFirestore(app)
export{db};