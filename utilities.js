const fs = require('fs');
const path = require('path');

module.exports = {

    // Heavy syncronous task to symbolize checking out
    checkout(cart) {
        const exampleString = this.buildString(cart.itemCount);
        fs.writeFileSync(path.join(__dirname, `carts/${cart.name}.txt`), exampleString);
    },

    // Same task, but returns a Promise
    checkoutAsync (cart) {
        const exampleString = this.buildString(cart.itemCount);
        return new Promise((resolve, reject) => {
            fs.promises.writeFile(path.join(__dirname, `carts/${cart.name}.txt`), exampleString)
            .then(resolve)
            .catch((err) => reject(err));
        })

        // leaving this here to show as an example in the presentation
        // return fs.promises.writeFile(path.join(__dirname, `carts/${cart.name}.txt`), exampleString);
    },

    buildString(count) {
        let exampleString = 'item';
        for (let i = 0; i < count * 999; i++) {
            exampleString += ' another item';
        }
        return exampleString;
    },

    checkoutComplete(cart) {
        console.log(`${cart.name} completed`);
    },

    driveAction(direction, time) {
        return new Promise((resolve, _) => {
            setTimeout(() => {
                console.log(`turning ${direction} after ${time}ms`);
                resolve();
            }, time);
        })
    }
}