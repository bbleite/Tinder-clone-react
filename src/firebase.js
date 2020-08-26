const firebaseConfig = {
    apiKey: "AIzaSyBQtEEoLLNGjY-y6LP6s8VFYa4glMMqjoU",
    authDomain: "tinder-clone-49dd5.firebaseapp.com",
    databaseURL: "https://tinder-clone-49dd5.firebaseio.com",
    projectId: "tinder-clone-49dd5",
    storageBucket: "tinder-clone-49dd5.appspot.com",
    messagingSenderId: "650027172774",
    appId: "1:650027172774:web:0828beb703761cb8eb8567",
    measurementId: "G-96TC1L38GH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;