import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCU4bAbasEzwXbxWr4kzPk69kGE8ngXoLk",
  authDomain: "realtimetodoos.firebaseapp.com",
  databaseURL: "https://realtimetodoos.firebaseio.com",
  projectId: "realtimetodoos",
  storageBucket: "realtimetodoos.appspot.com",
  messagingSenderId: "592027593446",
  appId: "1:592027593446:web:e5b9248f40101a54"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
