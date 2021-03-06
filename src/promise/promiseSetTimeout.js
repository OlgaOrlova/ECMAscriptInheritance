'use strict';

function createPromiseRandom(min, max, delay) {
    return new Promise(function (resolve, reject) {{
            setTimeout(function () {
                if (min < max) {
                    var myNumber = Math.ceil(Math.random() * (min - max) + max);
                    resolve(myNumber);
                } else {
                    reject(new Error("min > max"));
                }
            }, delay);
        }
    });
}
var p1 = createPromiseRandom(1, 100, 2000);
p1.then(function (number) {
    console.log(number);
});
var p2 = createPromiseRandom(1000, 100, 3000);
p2.catch(function (error) {
    return console.log("error: " + error.message);
});