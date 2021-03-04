import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyA9jNWT8zBFb0UdXW3vk6-nvfFNIUtZ2a8",
    authDomain: "body-age-calculator.firebaseapp.com",
    databaseURL: "https://body-age-calculator-default-rtdb.firebaseio.com",
    projectId: "body-age-calculator",
    storageBucket: "body-age-calculator.appspot.com",
    messagingSenderId: "678533667647",
    appId: "1:678533667647:web:1f006f6202ee5db506518a"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();