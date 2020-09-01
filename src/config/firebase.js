import { rout } from '../lib/Router.js';
import { signUp } from '../lib/pages/sign.js';

const firebaseConfig = {
  apiKey: "AIzaSyDvSCmiy0G-DpphY_stOeO8aqG1lF5xK4A",
  authDomain: "rs-lab-sandy.firebaseapp.com",
  databaseURL: "https://rs-lab-sandy.firebaseio.com",
  projectId: "rs-lab-sandy",
  storageBucket: "rs-lab-sandy.appspot.com",
  messagingSenderId: "809582962591",
  appId: "1:809582962591:web:45ace717638a86440ebfaa",
  measurementId: "G-S0M574LPVM"
};


firebase.initializeApp(firebaseConfig);

const init = () => {
    document.getElementById('root').appendChild(signUp());
    window.addEventListener('hashchange', () => {
        rout(window.location.hash);
    });
};

window.addEventListener('load', init);