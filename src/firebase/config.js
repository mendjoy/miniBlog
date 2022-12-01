
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDan4D63lQrfmVz8QinsFzgsrNlelO3mSk",
  authDomain: "projeto-miniblog.firebaseapp.com",
  projectId: "projeto-miniblog",
  storageBucket: "projeto-miniblog.appspot.com",
  messagingSenderId: "165001171273",
  appId: "1:165001171273:web:eb17e8a1fd29f3e339ca98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };