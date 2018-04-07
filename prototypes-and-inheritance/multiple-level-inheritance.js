'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 1;

const fluffy = new Cat('somecat', 'red');

console.log(fluffy.__proto__);
console.log(fluffy.__proto__.__proto__);
console.log(fluffy.__proto__.__proto__.__proto__);