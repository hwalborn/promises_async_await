const shoppingLine = require('../env/shoppingLine');
const utilities = require('../utilities');

shoppingLine.reduce((promiseChain, cart) => {
    return promiseChain.then(_ => {
        utilities.checkout(cart)
        utilities.checkoutComplete(cart);
    });
}, Promise.resolve());