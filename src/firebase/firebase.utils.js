import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyCigdKDD-PSrXD4Mqnk8xxkIf2qtNd3zZc',
  authDomain: 'el-tiempo-io.firebaseapp.com',
  databaseURL: 'https://el-tiempo-io.firebaseio.com',
  projectId: 'el-tiempo-io',
  storageBucket: 'el-tiempo-io.appspot.com',
  messagingSenderId: '979135594790',
  appId: '1:979135594790:web:a40317c9d0bc46c655c1e7',
  measurementId: 'G-6YV04D2LDD',
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
