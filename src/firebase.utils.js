import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBufwZNscSNIDlRHdEd4k9QfSB5Dd8DPXc",
    authDomain: "developerteam-63846.firebaseapp.com",
    projectId: "developerteam-63846",
    storageBucket: "developerteam-63846.appspot.com",
    messagingSenderId: "948388146230",
    appId: "1:948388146230:web:bdf149294e38db1f86bc97",
    measurementId: "G-0V1ZHTP397"
};

const app = firebase.initializeApp(config);

export const auth = firebase.auth(app);
export default app;