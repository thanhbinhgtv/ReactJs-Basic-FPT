import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBIirpc2AK-G17iXepkCEfb5s2FpW1fK7A",
    authDomain: "assm-b9b97.firebaseapp.com",
    databaseURL: "https://assm-b9b97.firebaseio.com",
    projectId: "assm-b9b97",
    storageBucket: "assm-b9b97.appspot.com",
    messagingSenderId: "392105639407",
    appId: "1:392105639407:web:d1bd02918dc250dc7fca1a"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase