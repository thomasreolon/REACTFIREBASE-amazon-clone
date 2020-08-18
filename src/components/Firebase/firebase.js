import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAlx8AHQyhe61N0B5RUNStHv4nOY46WiUA",
  authDomain: "mern-stack-exercice.firebaseapp.com",
  databaseURL: "https://mern-stack-exercice.firebaseio.com",
  projectId: "mern-stack-exercice",
  storageBucket: "mern-stack-exercice.appspot.com",
  messagingSenderId: "440444404350",
  appId: "1:440444404350:web:9c966e26fbf78e712a8e2f",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  /* Function To Handle auth (default from firebase) */
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
