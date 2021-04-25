const Shopping = require('../classes/Shopping');
const utilities = require('../utilities');

const firstCart = new Shopping(1029, 'bob');
const secondCart = new Shopping(235, 'jebediah');
const thirdCart = new Shopping(1209, 'suzie');
const fourthCart = new Shopping(1, 'sabatino');

utilities.checkout(firstCart);
utilities.checkoutComplete(firstCart);
utilities.checkout(secondCart);
utilities.checkoutComplete(secondCart);
utilities.checkout(thirdCart);
utilities.checkoutComplete(thirdCart);
utilities.checkout(fourthCart);
utilities.checkoutComplete(fourthCart);
