import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCl8TCeBQUIa6VCfMeOJPm0wntVqwJv32s",
    authDomain: "punk-beers.firebaseapp.com",
    databaseURL: "https://punk-beers.firebaseio.com",
    projectId: "punk-beers",
    storageBucket: "punk-beers.appspot.com",
    messagingSenderId: "670065712253",
    appId: "1:670065712253:web:f0228575fc27245daba514"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const providers = {
  google: new firebase.auth.GoogleAuthProvider()
}

export const firestore = firebase.firestore();

export default firebase;