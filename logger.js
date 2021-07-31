const file = './log.txt'
const fs = require('fs')

const EventEmmiter = require('events');
const log = new EventEmmiter();


log.on('event', (message) => {
    fs.appendFile(file, `${message}\n`,  (err) => {
        if (err) throw err;
    })
    console.log('file saved successfully');
})


// function log(message ) {
//     fs.appendFile(file, `${message}\n`, (err) => {
//         if (err) throw err;
//     });
//     // console.log(`Logging: ${message}`)
// }

// console.log(module)

module.exports.log = log;
module.exports.file = file;



