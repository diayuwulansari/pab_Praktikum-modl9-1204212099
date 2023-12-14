import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyACrEzdTEhLr3lsg9X1vJKaw905UiZBOh0",
    authDomain: "project-diaayu.firebaseapp.com",
    databaseURL: "https://project-diaayu-default-rtdb.firebaseio.com",
    projectId: "project-diaayu",
    storageBucket: "project-diaayu.appspot.com",
    messagingSenderId: "626121961540",
    appId: "1:626121961540:web:f589e72c307648ae4b0c11"
  });

const FIREBASE = firebase;

export default FIREBASE;
