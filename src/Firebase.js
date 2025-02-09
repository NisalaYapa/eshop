import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdSHD-9B3pOtyu5la1S1T3bIpJrLfZeVE",
  authDomain: "eshop-194d9.firebaseapp.com",
  projectId: "eshop-194d9",
  storageBucket: "eshop-194d9.appspot.com",
  messagingSenderId: "957810639025",
  appId: "1:957810639025:web:d84a4b3392dc4d9db26290",
  measurementId: "G-GB1TDWFD7Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
