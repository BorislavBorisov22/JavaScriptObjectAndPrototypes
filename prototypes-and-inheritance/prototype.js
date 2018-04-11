'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

const fluffy = new Cat('fluffy', 'red');
console.log(Cat.prototype);
console.log(fluffy.__proto__);
console.log(Cat.prototype === fluffy.__proto__);
