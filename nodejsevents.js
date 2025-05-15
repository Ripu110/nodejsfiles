const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
    console.log('please refill the water tank tommorow');
    setTimeout(() => {
        console.log('water tank is full');
    }, 4000);
});

console.log('water tank is empty');
myEmitter.emit('waterfull');
console.log('water tank is still empty');

myEmitter.emit('waterfull');