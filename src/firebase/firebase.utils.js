import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return userRef;
};

/* export const fetchPinned = async (userId) => {


}; */

export const addPinned = async (payload, userId) => {
  const pinnedCollection = firestore
    .doc(`users/${userId}`)
    .collection('pinned');
  try {
    await pinnedCollection.add(payload);
  } catch (error) {
    console.error(error);
  }
};

export const deletePinned = async (payload, userId) => {
  console.log('deleting...');
  const pinToDelete = firestore
    .doc(`users/${userId}`)
    .collection('pinned')
    .doc(payload.id);
  console.log(payload.id);
  console.log({ pinToDelete });
  try {
    await pinToDelete.delete(payload);
    console.log('deleted');
  } catch (error) {
    console.error(error);
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
