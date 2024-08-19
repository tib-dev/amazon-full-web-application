import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfmK8sgIb64xVPIJg0gd9AHYLpRX-NuWU",
  authDomain: "clone-b34f5.firebaseapp.com",
  projectId: "clone-b34f5",
  storageBucket: "clone-b34f5.appspot.com",
  messagingSenderId: "243544135481",
  appId: "1:243544135481:web:c6d1933cac45667c897ae8",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
