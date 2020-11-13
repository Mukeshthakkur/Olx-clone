
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBGDTJgORtC9VVc7lb5rqsQAac1CbXUs50",
  authDomain: "olx-clone-dbbfd.firebaseapp.com",
  databaseURL: "https://olx-clone-dbbfd.firebaseio.com",
  projectId: "olx-clone-dbbfd",
  storageBucket: "olx-clone-dbbfd.appspot.com",
  messagingSenderId: "471382346695",
  appId: "1:471382346695:web:383c8c4421e010c62ca7e2",
  measurementId: "G-W0YLJ9N081"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
export const google_provider = new firebase.auth.GoogleAuthProvider()
export const database = firebase.database();
export const storage = firebase.storage();
