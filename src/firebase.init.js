// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZL1bEGvBDSVlc9L1nr7O9yRT3ihN8PnI",
  authDomain: "neko-assignment-10.firebaseapp.com",
  projectId: "neko-assignment-10",
  storageBucket: "neko-assignment-10.appspot.com",
  messagingSenderId: "423820663586",
  appId: "1:423820663586:web:bff1e45e1795e5df6b637b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;