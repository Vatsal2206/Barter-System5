import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyDx-3_caMYB_ubyen-G8xBjvxe0aNIQ_Dg',
  authDomain: 'barter-system-286e5.firebaseapp.com',
  projectId: 'barter-system-286e5',
  storageBucket: 'barter-system-286e5.appspot.com',
  messagingSenderId: '271055075612',
  appId: '1:271055075612:web:c60344bd8ed848a5c6a2d9',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
