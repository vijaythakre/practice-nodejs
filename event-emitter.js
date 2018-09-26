const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', a => {
	console.log('Listener Called');
})

// raise event
emitter.emit('messageLogged');