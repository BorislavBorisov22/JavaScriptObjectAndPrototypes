'use strict';

const arr = ['red', 'blue', 'green'];

Object.defineProperty(Array.prototype, 'last', {
    get: function() {
        return this[this.length - 1];
    }
});

console.log(arr.last);

const arr2 = [...arr];
console.log(arr2.last);