// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: 'drawings-by-leo-32af4.firebaseapp.com',
    projectId: 'drawings-by-leo-32af4',
    storageBucket: 'drawings-by-leo-32af4.appspot.com',
    messagingSenderId: '1035383125762',
    appId: '1:1035383125762:web:453c3271715763449cf41b',
    measurementId: 'G-C7ZGTMBRQ0'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
