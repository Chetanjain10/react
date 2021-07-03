import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

firebase.initializeApp ({
    apiKey: "AIzaSyC3OWhkbXJGMqUKgiminnVjmPVm0kGcYyE",
    authDomain: "class-demo-5a148.firebaseapp.com",
    projectId: "class-demo-5a148",
    storageBucket: "class-demo-5a148.appspot.com",
    messagingSenderId: "942163708275",
    appId: "1:942163708275:web:76dac072eaeea7c9e01d06"
})

export default firebase;