import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDxs9xfN0vrtKTK7t1IWEisZ2Kcu5cAF_8",
  authDomain: "groceries-62672.firebaseapp.com",
  projectId: "groceries-62672",
  storageBucket: "groceries-62672.appspot.com",
  messagingSenderId: "971683521834",
  appId: "1:971683521834:web:78ff0aba23ffe864b4ea53"
};

const app = initializeApp(firebaseConfig);
export const authentication= getAuth(app);
export const database=getFirestore();