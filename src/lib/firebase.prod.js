import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBcJ6ROt340l9hBUMEzRmd8kR_x56wxMpU',
  authDomain: 'netflix-7146f.firebaseapp.com',
  databaseURL: 'https://netflix-7146f.firebaseio.com',
  projectId: 'netflix-7146f',
  storageBucket: 'netflix-7146f.appspot.com',
  messagingSenderId: '107161095291',
  appId: '1:107161095291:web:f8f03f6d50c67ff68e66de',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
