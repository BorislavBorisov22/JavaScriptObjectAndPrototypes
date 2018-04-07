'use strict';

// writable property example
const cat = {
    name: { first: 'fluffy', last: 'morefluffy' },
    color: 'red'
};

console.log(Object.getOwnPropertyDescriptor(cat, 'name'));

// making the name property readonly makes only the name property non-changable
Object.defineProperty(cat, 'name', { writable: false });
cat.name.first = 'newname';
console.log(cat);

// freezing name prop makes the whole name object non-changable
Object.freeze(cat.name);
cat.name.first = 'newestname';
console.log(cat);