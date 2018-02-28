'use strict';
function createPromiseRandom(min, max, delay) {
    return new Promise((resolve, reject) => {
        if (min < max) {
            setTimeout(() => {
                let myNumber = Math.ceil(Math.random() * (min - max) + max);
                resolve(myNumber);
            }, delay);
        } else {
            setTimeout(() => {
                    reject(new Error("min > max"));
                },
                delay);
        }
    });
}
let p1 = createPromiseRandom(1, 100, 2000);
p1.then((number) => {
    console.log(number);
});
let p2 = createPromiseRandom(1000, 100, 3000);
p2.catch((error) => console.log(`error: ${error.message}`));