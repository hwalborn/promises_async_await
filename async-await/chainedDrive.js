const directions = require('../env/directions');
const utilities = require('../utilities');

directions.reduce((promiseChain, direction) => {
    return promiseChain.then(_ => utilities.driveAction(direction[0], direction[1]));
}, Promise.resolve());