import * as firebase from 'firebase/app';

/* firebase 인증 */
import 'firebase/auth';

/* firebase database */
import 'firebase/database';
/* firebase storage */
import 'firebase/storage';

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

/* firebase 인증 */
export const FirebaseAuth = firebase.auth();

/* firebase database */
export const FirebaseRDB = firebase.database();

/* firebase storage */
export const FirebaseStorage = firebase.storage();
