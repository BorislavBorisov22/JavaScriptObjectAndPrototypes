'use strict';

const cat = {
    name: { first: 'fluffy', last: 'fluff' },
    color: 'red'
};

Object.defineProperty(cat, 'fullname', {
    get: function() {
        return `${this.name.first} ${this.name.last}`;
    },
    set: function(value) {
        const nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
    }
});

console.log(cat.fullname);

cat.fullname = 'new name';

console.log(cat.fullname);
console.log(cat.name.first);
console.log(cat.name.last);