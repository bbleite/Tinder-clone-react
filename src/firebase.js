import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAgFlPgVjWPsfWYdUlnVsMJ_pOktTFSFRM",
  authDomain: "tinder-clone-adcd7.firebaseapp.com",
  databaseURL: "https://tinder-clone-adcd7.firebaseio.com",
  projectId: "tinder-clone-adcd7",
  storageBucket: "tinder-clone-adcd7.appspot.com",
  messagingSenderId: "952579758764",
  appId: "1:952579758764:web:3b8e931cc99cbbd528dd09",
  measurementId: "G-L2X6G3BP82"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;