import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRWBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRWBASE_AUTHO_DOMAIN,
  projectId: process.env.REACT_APP_FIRWBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRWBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRWBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIRWBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIRWBASE_MEASUEMENT_ID,
};
//connection our App with firebase
const app = initializeApp(firebaseConfig);
//for Doing Authontaction [protect like login page]for this APP
const auth = getAuth(app);
//to can store Data in Database
const db = getFirestore(app);
export { auth, db };
