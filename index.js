const person = {
    name: 'somename',
    age: 22
};

const personCopy = Object.assign({}, person);

console.log(person, personCopy);