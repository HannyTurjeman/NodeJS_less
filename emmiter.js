const EventEmmiter = require('events');
const emmiter = new EventEmmiter();

emmiter.on('empty-array', () => {
    console.error('the array is empty');
})

module.exports.emmiter = emmiter;