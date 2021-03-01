import * as firebase from 'firebase'
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyA0y-PmOo-U3YvfjSKfY9p_LcJMS_ZD0YA",
    authDomain: "campus-recritment-system.firebaseapp.com",
    projectId: "campus-recritment-system",
    storageBucket: "campus-recritment-system.appspot.com",
    messagingSenderId: "1051267781699",
    appId: "1:1051267781699:web:3957078de6000c9ca2f0f6",
    measurementId: "G-1R5KC0JECN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

function registerUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)

}

function LoginUser(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export {
    registerUser,LoginUser
}
