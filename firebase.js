import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_Lu7Of_3Q_RFAGLThjKgUDyVlmvlf_P0",
    authDomain: "linkedin-e99ba.firebaseapp.com",
    projectId: "linkedin-e99ba",
    storageBucket: "linkedin-e99ba.appspot.com",
    messagingSenderId: "106560747508",
    appId: "1:106560747508:web:5180ee8eba44f0df7eaba1",
    measurementId: "G-DMR02FE1PE"
  
  
  });
const db=firebaseApp.firestore();
const auth=firebase.auth();

const storage=firebase.storage();
  
export {auth};
export default db; 