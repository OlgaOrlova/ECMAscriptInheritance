'use strict';

class Square {
    constructor(side) {
        this._side = side;
    }

    get side() {
        return this._side;
    }

    set side(value) {
        this._side = value;
    }

    perimeter() {
        return this._side * 4;
    }
}

class CubeOne extends Square {
    constructor(side) {
        super(side);
    }

    perimeter() {
        console.log("Perimeter CubeOne: " + this.side * 12);
    }
}

class CubeTwo extends Square {
    constructor(side) {
        super(side);
    }

    perimeter() {
        let parentPerimeter = super.perimeter();
        console.log("Perimeter CubeTwo: " + ((this.side * 8) + parentPerimeter));
    }
}

let cubeOne = new CubeOne(2);
cubeOne.perimeter();
let cubeTwo = new CubeTwo(2);
cubeTwo.perimeter();
