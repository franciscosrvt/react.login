import firebase from 'firebase';

const config = { 
 apiKey: "AIzaSyDCBbxBBuKJJOdF_VHmd2SCmEmVRzXPnik",
  authDomain: "login-64a65.firebaseapp.com",
  databaseURL: "https://login-64a65.firebaseio.com",
  projectId: "login-64a65",
  storageBucket: "login-64a65.appspot.com",
  messagingSenderId: "733183965645",
};
const newfire = firebase.initializeApp(config);
export default newfire;