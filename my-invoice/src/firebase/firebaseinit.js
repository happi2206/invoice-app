import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD8EF-68rGvTrtICCNYOcRUp_C4lkiOaJs',
  authDomain: 'invoice-app-16fd8.firebaseapp.com',
  projectId: 'invoice-app-16fd8',
  storageBucket: 'invoice-app-16fd8.appspot.com',
  messagingSenderId: '900297830570',
  appId: '1:900297830570:web:9047029be75afbf7a6e0d3',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { firebaseApp, db };
