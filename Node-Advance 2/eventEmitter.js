//creating an eventEmitter
const EventEmitter = require('events');
const MyeventEmitter=new EventEmitter();

MyeventEmitter.on('change color',()=>{
    console.log('on your order,i changed color');
});
//First write what to do on event emission so first use on keyword to define that and only then emit the event
MyeventEmitter.emit('change color');
MyeventEmitter.emit('change color');
MyeventEmitter.emit('change color');

// setTimeout(() => {
//     console.log('hellooooo');
// }, 1000);


//Let's do the same thinng asynchronously using setTiemInterval
setInterval(()=>{
    MyeventEmitter.emit('change color');
},1000);
//now it will be emiited every second 



