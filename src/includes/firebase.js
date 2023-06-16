import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCEyxRQ5oepQu9B2B3IEqmG7FcBfn4RhqM",
  authDomain: "music-c2487.firebaseapp.com",
  projectId: "music-c2487",
  storageBucket: "music-c2487.appspot.com",
  appId: "1:740992639541:web:0c4fdeff3c48499288477c"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};