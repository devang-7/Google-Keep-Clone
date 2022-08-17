import {initializeApp} from "firebase/app"
import {getFirestore} from "@firebase/firestore"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvx1sONxv4pmkQhNP4nAXeePeAWF18yz4",
    authDomain: "keep-8ecf1.firebaseapp.com",
    projectId: "keep-8ecf1",
    storageBucket: "keep-8ecf1.appspot.com",
    messagingSenderId: "624552184841",
    appId: "1:624552184841:web:221015bc72025d216c7cd8",
    measurementId: "G-QKR1THLYYG"
  };

  // Initialising the app
  const app = initializeApp(firebaseConfig);

  // Access firestore instance
  export const db = getFirestore(app);
