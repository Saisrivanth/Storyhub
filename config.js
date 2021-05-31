import * as firebase from 'firebase';
require("@firebase/firestore")
 

const firebaseConfig = {
    apiKey: "AIzaSyB-gn4ZkQgwywQ6N7bpeMVWnsvZH9obpC0",
    authDomain: "story-hub-e671c.firebaseapp.com",
    projectId: "story-hub-e671c",
    storageBucket: "story-hub-e671c.appspot.com",
    messagingSenderId: "473321616741",
    appId: "1:473321616741:web:fd4ded62fae0dfeec55d8c"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
