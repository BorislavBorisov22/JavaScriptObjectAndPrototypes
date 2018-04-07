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