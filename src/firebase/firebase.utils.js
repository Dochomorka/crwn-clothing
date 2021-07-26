import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlR5mBHO5Qx8vFqErZjpzULsI9-LLQpEg",
    authDomain: "crwn-db-ae553.firebaseapp.com",
    projectId: "crwn-db-ae553",
    storageBucket: "crwn-db-ae553.appspot.com",
    messagingSenderId: "316577764728",
    appId: "1:316577764728:web:29ca75dfdc51a280a8a48d",
    measurementId: "G-2T6VM84ZLP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
