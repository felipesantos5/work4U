import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLEYE1NJUh4HDCvLoToSCwtBHFqlfKWZ8",
  authDomain: "work4u-904e1.firebaseapp.com",
  projectId: "work4u-904e1",
  storageBucket: "work4u-904e1.appspot.com",
  messagingSenderId: "236613600438",
  appId: "1:236613600438:web:a2bbd48e0241d6ec659217",
  measurementId: "G-V0ER1NC7W9",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
