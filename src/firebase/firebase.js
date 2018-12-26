import * as firebase from 'firebase';
// Initialize Firebase
const config = {
    apiKey: "AIzaSyAbWo8LNsq7B__1auWCBOIT270VcQsiQsc",
    authDomain: "expensify-3bf05.firebaseapp.com",
    databaseURL: "https://expensify-3bf05.firebaseio.com",
    projectId: "expensify-3bf05",
    storageBucket: "expensify-3bf05.appspot.com",
    messagingSenderId: "84448602979"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name:'Henrik Sandberg',
    age: 27,
    isSingle: false,
    location: {
        city: 'Koblenz',
        country: 'Germany'
    }
});

// database.ref().set('This is some date');

// database.ref('location/city').set('Oslo');

database.ref('attrebutes').set({
    height: 185,
    weight: 75,
});