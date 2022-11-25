
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_APIKEY}`,
    authDomain: "curso-cad38.firebaseapp.com",
    projectId: "curso-cad38",
    storageBucket: "curso-cad38.appspot.com",
    messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDERID}`,
    appId: `${process.env.REACT_APP_APPID}`,
    measurementId: `${process.env.REACT_APP_MEASUREMENTID}`
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };