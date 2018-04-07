'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.age = 4;

const fluff = new Cat('fluffy', 'red');
const muffin = new Cat('muffin', 'blue');

// adding Cat prototype reference to a new object
Cat.prototype = { age: 5 };

const snowbell = new Cat('snowbell', 'white');

console.log(fluff.age);
console.log(muffin.age);

console.log(Cat.prototype.age);
console.log(snowbell.age)