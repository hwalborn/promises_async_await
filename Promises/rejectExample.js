const asyncTask = () => {
    return new Promise((resolve, reject) => {
        reject('task failed');
    });
}

asyncTask().then(() => {
    // won't actually hit this code
}, (err) => {
    console.log(err);
});