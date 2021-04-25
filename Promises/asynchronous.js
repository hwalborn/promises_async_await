const Shopping = require('../classes/Shopping');
const utilities = require('../utilities');

const firstCart = new Shopping(1029, 'bob');
const secondCart = new Shopping(235, 'jebediah');
const thirdCart = new Shopping(1209, 'suzie');
const fourthCart = new Shopping(1, 'sabatino');

utilities.checkoutAsync(firstCart).then(utilities.checkoutComplete.bind(this, firstCart));
utilities.checkoutAsync(secondCart).then(utilities.checkoutComplete.bind(this, secondCart));
utilities.checkoutAsync(thirdCart).then(utilities.checkoutComplete.bind(this, thirdCart));
utilities.checkoutAsync(fourthCart).then(utilities.checkoutComplete.bind(this, fourthCart));