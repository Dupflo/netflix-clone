import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: 'AIzaSyBcJ6ROt340l9hBUMEzRmd8kR_x56wxMpU',
  authDomain: 'netflix-7146f.firebaseapp.com',
  databaseURL: 'https://netflix-7146f.firebaseio.com',
  projectId: 'netflix-7146f',
  storageBucket: 'netflix-7146f.appspot.com',
  messagingSenderId: '107161095291',
  appId: '1:107161095291:web:f8f03f6d50c67ff68e66de',
};

firebase.initializeApp(config);

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
