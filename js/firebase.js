import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD-efckbnibQnXQAwBelt2aATc9AkGO_W4",
    authDomain: "tinder-for-movies.firebaseapp.com",
    databaseURL: "https://tinder-for-movies.firebaseio.com",
    projectId: "tinder-for-movies",
    storageBucket: "tinder-for-movies.appspot.com",
    messagingSenderId: "511359791590"
};
export const firebaseApp = firebase.initializeApp(config)

export const storage = firebase.storage().ref();