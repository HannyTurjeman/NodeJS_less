const emmiter = require('./emmiter');
const logger = require('./logger');

function getLength(arr){
    if(arr.length == 0 ) {
        emmiter.emmiter.emit('empty-array')
        logger.log.emit('event','the array is empty');
    }else {
        logger.log.emit('event',arr.length)
        return arr.length;
    }
}

function getFirst(arr){
    if(arr.length == 0 ) {
        emmiter.emmiter.emit('empty-array')
        logger.log.emit('event','the array is empty');

    }else {
        logger.log.emit('event', arr[0])
        return arr[0];
    }
}

function getLast(arr){
    if(arr.length == 0 ) {
        emmiter.emmiter.emit('empty-array')
        logger.log.emit('event','the array is empty');
    }else {
        logger.log.emit('event', arr[arr.length - 1])
        return arr[arr.length - 1];
    }
}

module.exports.getLength = getLength;
module.exports.getFirst = getFirst;
module.exports.getLast = getLast;