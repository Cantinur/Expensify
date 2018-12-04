//Object destructoring

const person = {
    name: 'Henrik',
    age: 27,
    loaction: {
        city: 'Oslo',
        temp: 3
    }
}

const { name: firstname = 'Annonymus', age } = person;

console.log(`${firstname} is ${age}.`)

const {city, temp: temprature} = person.loaction;

console.log((temprature && city) ? `It's ${temprature} degrees in ${city}.` : '');


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name:'Penguin'
    }
};

const {name: publisherName = 'Self-published'} = book.publisher;

console.log(publisherName);

//Array destructoring
const address = ['Maridalsveien 205', 'Oslo', '0469', 'Norway'];
const [ ,city, ,country='Earth'] = address;
console.log(`You are in ${city} ${country}`);

const items = [
    'Coffee (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
];

const [item, , medium, ] = items;
console.log(`A ${item} costs ${medium}`);