
//Inicializacion de Firebase/Firestore
import firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

require("dotenv").config()


const app = firebase.initializeApp({
    apiKey: `${ process.env.REACT_APP_API_KEY }` ,
    authDomain: `${ process.env.REACT_APP_AUTH_DOMAIN }` ,
    projectId: `${ process.env.REACT_APP_PROJECT_ID }` ,
    storageBucket: `${ process.env.REACT_APP_STORAGE_BUCKET }` ,
    messagingSenderId: `${ process.env.REACT_APP_MESSAGING_SENDER_ID }` ,
    appId: `${ process.env.REACT_APP_APP_ID }`
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
};


