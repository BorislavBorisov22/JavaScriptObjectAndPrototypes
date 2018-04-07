'use strict';

const cat = {
    name: { first: 'fluffy', last: 'fluffy' },
    color: 'red'
};

Object.defineProperty(cat, 'name', { enumerable: false });
// Object.defineProperty(cat, 'name', { enumerable: true });

for (let propertyName in cat) {
    console.log(`propertyName:${cat[propertyName]}`);
}

console.log(Object.keys(cat));
console.log(JSON.stringify(cat));