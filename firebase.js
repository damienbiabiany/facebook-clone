import firebase from "firebase"
import "firebase/storage"

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
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app()

// Connection to firestore
const db           = app.firestore()
const storage      = firebase.storage()
const firebaseData = {auth, db, storage}

export default firebaseData
