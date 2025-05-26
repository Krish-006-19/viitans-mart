import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCAexMvTtV_xVo3slfqYX27rUUiEUvVwL8",
  authDomain: "e-commerce-4b10d.firebaseapp.com",
  projectId: "e-commerce-4b10d",
  storageBucket: "e-commerce-4b10d.appspot.com",
  messagingSenderId: "718583563266",
  appId: "1:718583563266:web:e8a3d8e8374c0d8142131b"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)
export { auth, provider, db }
