import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB9TZXmW1HhUzC1CJYAZGCrBB2fK2Q1GZ4",
    authDomain: "to-do-app-7093c.firebaseapp.com",
    projectId: "to-do-app-7093c",
    storageBucket: "to-do-app-7093c.appspot.com",
    messagingSenderId: "509513478261",
    appId: "1:509513478261:web:4e949410cfe12751c8483c"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export { db };