import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA_nQizM3KE8om9FUfgsKUtTKQGPtL3EDU',
  authDomain: 'fzzzzzzz-c0c67.firebaseapp.com',
  projectId: 'fzzzzzzz-c0c67',
  storageBucket: 'fzzzzzzz-c0c67.firebasestorage.app',
  messagingSenderId: '28590792510',
  appId: '1:28590792510:web:a7f38d6d5b277a6970566f',
  measurementId: 'G-Z1P1YH7845',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
