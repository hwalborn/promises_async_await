const directions = require('../env/directions');
const utilities = require('../utilities');

const carState = {
    isRaining: true,
    radio: 'Baha Men'
}

if (carState.isRaining) {
    console.log('turn on windsheild wipers');
}

const startDrive = async () => {
    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        try {
            await utilities.driveAction(direction[0], direction[1]);
        } catch (error) {
            console.error(error);
        }
        if (carState.radio === 'Justin Bieber') {
            console.log('turning radio off');
            carState.radio = undefined;
        }
    }
};
startDrive();

if (carState.radio === 'Baha Men') {
    console.log('changing radio station to Michael Jackson');
    carState.radio = 'Michael Jackson';
}

setTimeout(() => {
    console.log('changing radio station to Justin Bieber');
    carState.radio = 'Justin Bieber';
}, 750);
