const directions = require('../env/directions');
const utilities = require('../utilities');

for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    utilities.driveAction(direction[0], direction[1]);
}