import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "FAKE_API_KEY",
  authDomain: "FAKE_AUTH_DOMAIN",
  projectId: "FAKE_PROJECT_ID",
  storageBucket: "FAKE_STORAGE_BUCKET",
  messagingSenderId: "FAKE_MESSAGING_SENDER_ID",
  appId: "FAKE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
