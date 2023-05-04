import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyClA9S_iB7sWKyDf3RzZED210Rilwik-2s",
  authDomain: "lofi-app-593ad.firebaseapp.com",
  projectId: "lofi-app-593ad",
  storageBucket: "lofi-app-593ad.appspot.com",
  messagingSenderId: "639143019451",
  appId: "1:639143019451:web:045b64592171cf50603a9e",
  measurementId: "G-4XBMJG6DD5"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new  GoogleAuthProvider()

export { auth, provider }
export default db