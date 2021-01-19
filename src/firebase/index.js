
//Inicializacion de Firebase/Firestore
import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBTYgf6ul4ubRdZfOXW-l5JVxOYVx2nGDw",
    authDomain: "coderhouse-ecommerce-ef2fe.firebaseapp.com",
    projectId: "coderhouse-ecommerce-ef2fe",
    storageBucket: "coderhouse-ecommerce-ef2fe.appspot.com",
    messagingSenderId: "128304735942",
    appId: "1:128304735942:web:3e98bfc63ebfb6c5e8d9c7"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}