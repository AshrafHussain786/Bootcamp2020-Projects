import firebase from 'firebase/app'
import 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyAKkoaS-Qp3QXjEdI3VVDnuRnc0ZwcV39I",
  authDomain: "expensetracker-d52f4.firebaseapp.com",
  projectId: "expensetracker-d52f4",
  storageBucket: "expensetracker-d52f4.appspot.com",
  messagingSenderId: "926271921753",
  appId: "1:926271921753:web:1bbddd112c7057379bdb48",
  measurementId: "G-RLQEEQ560Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;