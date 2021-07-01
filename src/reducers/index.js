import { combineReducers } from 'redux';
import galleryReducer from './galleryReducer';
import firebaseReducer from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

export default combineReducers({
    gallery: galleryReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});
