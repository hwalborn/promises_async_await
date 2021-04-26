const https = require('https');

// Example 1
const asyncTask = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello from the promise');
        }, 1000);
    });
}

console.log('starting promise example');
const myPromise = asyncTask()
.then((resp) => {
    console.log(resp);
});
console.log(myPromise);

// Example 2
const getData = () => {
    return new Promise((resolve, reject) => {

        // NYC Parking violation API
        https.get('https://data.cityofnewyork.us/resource/pvqr-7yc4.json', (resp) => {

        // want to see an error? Comment line 24 and uncomment line 27...
        // https.get('https://data.cityofnewyork.us/resource/pvqr-7yc4.json?bob=123', (resp) => {

            // parse through the data
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                resolve(data);
            });

            }).on("error", (err) => {
                reject(err.message);
            });
    });
}

const parseJSON = (data) => {
    return new Promise((resolve, reject) => {
        resolve(JSON.parse(data));
    });
}

getData()
.then((resp) => parseJSON(resp))
.then((data) => console.log(data))
.catch((err) => {
    console.log(err);
});