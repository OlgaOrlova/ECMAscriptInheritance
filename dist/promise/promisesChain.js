"use strict";

function promise() {
    return new Promise(function (resolve, reject) {
        var x = prompt("input number:");
        if (isNaN(x)) {
            reject(new Error("NaN"));
        } else {
            resolve(x);
        }
    }).catch(function (error) {
        return promise();
    }).then(function (x) {
        if (x) {
            console.log(x);
        }
    });
}
promise();