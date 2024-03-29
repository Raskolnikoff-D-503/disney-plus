import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

// export const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_API_KEY}`,
//   authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_ID}`,
//   measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`,
// };

export const firebaseConfig = {
  apiKey: 'AIzaSyBNtUOnUUqgrnzJXUMX3k9Fv6HCqY26BGk',
  authDomain: 'disney-plus-app-e2845.firebaseapp.com',
  projectId: 'disney-plus-app-e2845',
  storageBucket: 'disney-plus-app-e2845.appspot.com',
  messagingSenderId: '504420337204',
  appId: '1:504420337204:web:1195bfef74d78657d66c61',
  measurementId: 'G-CL81CT54VE',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage};
export default db;
