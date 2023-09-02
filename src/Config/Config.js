// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore'
// import 'firebase/storage'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import  initializeApp  from "firebase/compat/app";S
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA0J4QvnObhNkWWBTfwVggK_tCLXQPLerY",
    authDomain: "ecommerce-6753c.firebaseapp.com",
    projectId: "ecommerce-6753c",
    storageBucket: "ecommerce-6753c.appspot.com",
    messagingSenderId: "1029197057983",
    appId: "1:1029197057983:web:63214f417c6fa5dd46db0a",
    measurementId: "G-4DZWM1BGXB"
  };
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage = firebase.storage();


  export {auth,fs,storage}