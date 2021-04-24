import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAMrWnnoUC6W_LuetQhrCUTEn1NiSM59cc',
  authDomain: 'distaurant-fba6e.firebaseapp.com',
  databaseURL: 'https://distaurant-fba6e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'distaurant-fba6e',
  storageBucket: 'distaurant-fba6e.appspot.com',
  messagingSenderId: '40014089412',
  appId: '1:40014089412:ios:fa3b14157a892211980d91',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };