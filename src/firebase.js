import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDos6Qxie4T967G9n0mBVpZ3ruuSAivkWU",
    authDomain: "tesla-clone-f36a6.firebaseapp.com",
    projectId: "tesla-clone-f36a6",
    storageBucket: "tesla-clone-f36a6.appspot.com",
    messagingSenderId: "1062975679490",
    appId: "1:1062975679490:web:93149b066a7a2b5355cb1b",
    measurementId: "G-TJNYDHTD06"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();
  export {auth};
  