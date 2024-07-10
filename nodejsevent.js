const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
  setTimeout(()=>{
   console.log("Genle remainder");
  },4000)
});
console.log("the beginning console ")
myEmitter.emit('event'); 
console.log("the last console")