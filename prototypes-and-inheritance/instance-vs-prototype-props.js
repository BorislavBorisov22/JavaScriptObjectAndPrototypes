'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.age = 4;

const fluff = new Cat('fluffy', 'red');
const muffin = new Cat('muffin', 'blue');

console.log(fluff.__proto__.age);
console.log(muffin.age);

// false because the age property is on the Cat prototype not a fluff property
console.log(fluff.hasOwnProperty('age'));
console.log(fluff.hasOwnProperty('color'));