import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
        apiKey: "AIzaSyBptndyxXHGP2DKUK9HtMry3OZyMjfclp0",
        authDomain: "question-and-answer-d931b.firebaseapp.com",
        projectId: "question-and-answer-d931b",
        storageBucket: "question-and-answer-d931b.appspot.com",
        messagingSenderId: "805883131093",
        appId: "1:805883131093:web:ab2a90b86533686e595e5c"
})

export const google = new firebase.auth.GoogleAuthProvider();