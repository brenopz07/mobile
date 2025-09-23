
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4VfRKJeSYExjLZV76LhiFzRLLprPHItU",
  authDomain: "devcurso-3b988.firebaseapp.com",
  projectId: "devcurso-3b988",
  storageBucket: "devcurso-3b988.appspot.com",
  messagingSenderId: "795246239555",
  appId: "1:795246239555:web:20383ecde341a50096d9f6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})



export { db, auth };