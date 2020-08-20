import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAlx8AHQyhe61N0B5RUNStHv4nOY46WiUA",
  authDomain: "mern-stack-exercice.firebaseapp.com",
  databaseURL: "https://mern-stack-exercice.firebaseio.com",
  projectId: "mern-stack-exercice",
  storageBucket: "mern-stack-exercice.appspot.com",
  messagingSenderId: "440444404350",
  appId: "1:440444404350:web:9c966e26fbf78e712a8e2f",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
