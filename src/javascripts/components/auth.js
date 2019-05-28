import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const attachEvents = () => {
  document.getElementById('sign-in').addEventListener('click', signIn);
};

export default { attachEvents };
