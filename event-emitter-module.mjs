import { EventEmitter } from 'events';

const customEmmiter = new EventEmitter();

customEmmiter.on('customEvent', () => {
  console.log('Triggered by custom Event');
})
customEmmiter.on('customEvent', () => {
  console.log('Triggered by custom Event 2');
})

// Listeners should be set BEFORE emit, otherwise we emit event nobody listens to 
customEmmiter.emit('customEvent');