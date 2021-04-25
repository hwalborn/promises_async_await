const shoppingLine = require('../env/shoppingLine');
const utilities = require('../utilities');

shoppingLine.forEach((cart) => {
    utilities.checkoutAsync(cart).then(utilities.checkoutComplete.bind(this, cart));
});