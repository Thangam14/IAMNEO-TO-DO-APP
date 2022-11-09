import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAnOtlmAx7lYI8DemXQKyrODQQCJDcjAC4",
  authDomain: "todo-c086d.firebaseapp.com",
  projectId: "todo-c086d",
  storageBucket: "todo-c086d.appspot.com",
  messagingSenderId: "614163815832",
  appId: "1:614163815832:web:8713700fdfca47d7009fed"
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
