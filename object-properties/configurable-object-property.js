'use strict';

const cat = {
    name: { first: 'fluffy', last: 'fluffy' },
    color: 'red'
};

Object.defineProperty(cat, 'name', { configurable: false });

// doest not throw error for writable attribute configuration
Object.defineProperty(cat, 'name', { writable: false });

// should now throw an error when defining enumerable attribute
Object.defineProperty(cat, 'name', { enumerable: false });

delete cat.name; // should throw error

// cat's enumerable property should still be displayed as enumerable
console.log(Object.keys(cat));