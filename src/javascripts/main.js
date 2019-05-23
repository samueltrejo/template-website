import firebase from 'firebase/app';

import fbconfig from './helpers/fbconfig.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(fbconfig.fbcreds);
};

init();
