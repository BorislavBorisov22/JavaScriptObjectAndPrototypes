'use strict';

function Animal(voice) {
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function() {
    console.log(this.voice);
}

function Cat(name, color) {
    Animal.call(this, 'meow');
    this.name = name;
    this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const fluffy = new Cat('fluffy', 'red');
fluffy.speak();

console.log(fluffy instanceof Cat);
console.log(fluffy);
console.log(fluffy.__proto__.__proto__);