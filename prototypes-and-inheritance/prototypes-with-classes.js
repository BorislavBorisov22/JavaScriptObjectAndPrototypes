'use strict';

class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt';
    }

    speak() {
        console.log(this.voice);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super('meow');
        this.name = name;
        this.color = color;
    }
}

const fluffy = new Cat('fluffy', 'red');
fluffy.speak();

console.log(fluffy instanceof Cat);
console.log(fluffy);
console.log(fluffy.__proto__.__proto__);