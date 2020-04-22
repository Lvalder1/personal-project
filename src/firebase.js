import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9z_2RgYEtK8DzQTEG6qMQTKUGRAHDRak",
  authDomain: "punk-beers-1.firebaseapp.com",
  databaseURL: "https://punk-beers-1.firebaseio.com",
  projectId: "punk-beers-1",
  storageBucket: "punk-beers-1.appspot.com",
  messagingSenderId: "723238874155",
  appId: "1:723238874155:web:ba30fee8b9498a4159ce6e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const providers = {
  google: new firebase.auth.GoogleAuthProvider()
}

export const firestore = firebase.firestore();

export default firebase;