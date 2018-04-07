// object literal
const personFromLiteral = {
    name: 'somename',
    age: 22
};

// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const personFromConstructorFunction = new Person('John Doe', 33);

// using object create
const personFromObjectCreate = Object.create(Object.prototype, {
    name: {
        value: 'Mike Dawson',
        enumerable: true,
        writable: true,
        configurable: true
    },
    age: {
        value: 22,
        enumerable: true,
        writable: true,
        configurable: true
    }
});

// using ES6 classes
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const personFromClass = new PersonClass('someothername', 44);