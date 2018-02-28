function promise() {
    return new Promise(function (resolve, reject) {
        let x = prompt("input number:");
        if (isNaN(x)) {
            reject(new Error("NaN"));
        } else {
            resolve(x);
        }
    }).catch((error) => {
        return promise();
    }).then((x) => {
        if (x) {
            console.log(x);
        }
    });
}
promise()