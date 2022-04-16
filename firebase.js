import {
  initializeApp,
  getApps,
} from 'firebase/app';
import {
  getStorage
} from "firebase/storage";
import {
  getAuth
} from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC090zTe_1oIdvJkHHJsogucQPadaWRS8",
  authDomain: "facebook-clone-84039.firebaseapp.com",
  projectId: "facebook-clone-84039",
  storageBucket: "facebook-clone-84039.appspot.com",
  messagingSenderId: "142798281877",
  appId: "1:142798281877:web:d6e3c3c1208c66f7fbcf9c"
};

// Initialize Firebase
/*
  We need to check if we have already initiliazed firebase because
  we use the server side rendering

  1) if the number of apps inialized(firebase.apps.length) is none
  Tell to firebase to initiliaze the App

  2) else if is not we use the existing one that it already initialized
*/
/*firebase SDK V8 */
// const app = !firebase.apps.length ? initializeApp(firebaseConfig): firebase.app()

/*firebase SDK V9*/
const app = initializeApp(firebaseConfig)
// const app = !getApps().length ? initializeApp(firebaseConfig): firebase.initializeApp()

// Connection to firestore
const db      = getFirestore(app);
const storage = getStorage(app);
const auth    = getAuth(app);

console.log("db      =", db);
console.log("storage =", storage);
console.log("auth    =", auth);

export {
  auth,
  db,
  storage
}