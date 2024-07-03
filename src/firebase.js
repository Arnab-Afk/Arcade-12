
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "A",
    authDomain: ".com",
    projectId: "A",
    storageBucket: "ID",
    messagingSenderId: "ID",
    appId: "Id",
    measurementId: "ID",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { firestore, auth, googleAuthProvider, app as default };
