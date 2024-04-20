// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdXctQdR1qHIlVTCc6TBVS29wi4ZmS_Zg",
  authDomain: "sneakers-shop-app.firebaseapp.com",
  projectId: "sneakers-shop-app",
  storageBucket: "sneakers-shop-app.appspot.com",
  messagingSenderId: "202806728182",
  appId: "1:202806728182:web:7ee3afc2393535056423d7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)