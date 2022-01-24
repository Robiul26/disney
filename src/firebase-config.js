// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJc0lhT1kVFtNBXqXC7AaKuaMomcK22oM",
    authDomain: "disney-plus-7401a.firebaseapp.com",
    projectId: "disney-plus-7401a",
    storageBucket: "disney-plus-7401a.appspot.com",
    messagingSenderId: "218250667632",
    appId: "1:218250667632:web:df509ca78b4ee4760eb6b5",
    measurementId: "G-14B1K2J6C2"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = app.firestore();
// const db = getFireStore(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};
// export default db;