import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMyX5B5B1SoMgzSsOtTKsXaS7UYXU9nUM",
    authDomain: "firegram-react-ad5c6.firebaseapp.com",
    databaseURL: "https://firegram-react-ad5c6.firebaseio.com",
    projectId: "firegram-react-ad5c6",
    storageBucket: "firegram-react-ad5c6.appspot.com",
    messagingSenderId: "651155959142",
    appId: "1:651155959142:web:576f3fa4053520b7fd6ca7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
