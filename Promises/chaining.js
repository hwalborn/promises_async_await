Promise.resolve()
.then(() => console.log('First then'))
.then(() => console.log('Second then'))
.then(() => 'bah bah bah')
.then((thing) => console.log(thing))
.then(() => new Promise((resolve, _) => resolve('hi Holt')))
.then((stuff) => console.log(`stuff: ${stuff}`));

// Promise.resolve()
// .then(() => console.log('First then'))
// .then(() => { throw new Error('This didn\'t work') })
// .catch((err) => console.log(err))
// .then(() => console.log('will always run'));