import firebase from 'firebase/app';

/* firebase database */
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

/**
 *  기본 firebase
 *  FirebaseAuth 를 import하여 사용하는 대신
 *  FirebaseInstance.auth()를 사용 가능
 **/
export const FirebaseInstance = firebase;

/* firebase database */
export const FirebaseRDB = firebase.database();
