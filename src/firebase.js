import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

// TODO: Replace the following with your app's Firebase project configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyDeDIDJgati9W5CVjGMQwt1Fo6hHsMzlFo",
    authDomain: "pelrio-production.firebaseapp.com",
    projectId: "pelrio-production",
    storageBucket: "pelrio-production.appspot.com",
    messagingSenderId: "1036439091096",
    appId: "1:1036439091096:web:5b264fb281e7b02c8b1ded"
});

// const app = initializeApp(firebaseConfig);
export const auth = app.auth()
export default app;