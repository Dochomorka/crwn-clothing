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

 export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth){
    return;
  }
   
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  if(!snapshot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt, 
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }
 
  return userRef;
 } 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


 export const addCollectionAndDocuments=async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey);
 
   const batch = firestore.batch();
   objectsToAdd.forEach(obj => {
     const newDocRef = collectionRef.doc();
     batch.set(newDocRef, obj);
   });
   return await batch.commit();
 };


  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumlator, collection) => {
      accumlator[collection.title.toLowerCase()] = collection;
      return accumlator;
    }, {})
  }


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth=> {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}
  
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;
