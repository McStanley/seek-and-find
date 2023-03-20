import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8Ajv-b1yl1wgcU_erUGwy9Rxy7xJ7KjM',
  authDomain: 'seek-and-find-mcstanley.firebaseapp.com',
  projectId: 'seek-and-find-mcstanley',
  storageBucket: 'seek-and-find-mcstanley.appspot.com',
  messagingSenderId: '785251251118',
  appId: '1:785251251118:web:292c233ff1faf00a2c4e3f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
