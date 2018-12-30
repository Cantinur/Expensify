import * as firebase from 'firebase';
import { timeout } from 'q';

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

const dataOn = database.ref().on('value', snapshot => {
    console.log(`${snapshot.val().name} is a ${snapshot.val().jobb.title} at ${snapshot.val().jobb.company}`);
}, e => {
    console.log('Error accured', e);
});

setTimeout(()=> {
    database.ref('jobb').update({
        company: 'Google'
    })
}, 3500);

setTimeout(()=>{
    database.ref().off('value', dataOn);
}, 7000);

setTimeout(()=>{
    database.ref('jobb').update({
        company: 'Apple'
    })
}, 10000);


// database.ref('location').once('value')
//     .then(snapshot => {
//         console.log(snapshot.val());
//     }).catch(e => {
//         console.log('Error fetching data', e);
// })


// database.ref().set({
//     name:'Henrik Sandberg',
//     age: 27,
//     jobb: {
//         title:'Software developer',
//         company:'Repairable',
//     },
//     stressLevel: 6,
//     location: {
//         city: 'Koblenz',
//         country: 'Germany'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch(e => {
//     console.log('This faild', e);
// });

// database.ref().update({
//     jobb: 'React Developer',
//     'location/city': 'Oslo',
//     'location/country': 'Norway',
// });


// database.ref().update({
//     stressLevel:9,
//     'jobb/company': 'Amazon',
//     'location/city': 'Berlin',
// })

//database.ref('isSingle').remove();


// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('Remove succeeded');
//     }).catch(e => {
//         console.log('Error: ', e);
//     });

// // database.ref().set('This is some date');

// // database.ref('location/city').set('Oslo');

// database.ref('attrebutes').set({
//     height: 185,
//     weight: 75,
// }).then(() => {
//     console.log('Then runs')
// }).catch(e => {
//     console.log('Oh no, error happend...\n', e);
// });