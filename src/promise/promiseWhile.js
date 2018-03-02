"use strict";

new Promise(function (resolve, reject) {
    let x = prompt("input number:");
    while (isNaN(x)){
        x = prompt("type number");
    };
    resolve(x);
}).then(function (result) {
    console.log(result);
});