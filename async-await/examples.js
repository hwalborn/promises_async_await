const asyncTask = () => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve('Promise fulfilled');
        }, 1000)
    });
}

const runTask = async () => {
    console.log('Running async Task');
    try {
        const resolution = await asyncTask();
        console.log(resolution);
    } catch (error) {
        console.log(error);
    }
    console.log('end of running');
}

runTask();