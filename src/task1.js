'use strict';

class Shape {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(x) {
        this._x = x;
    }

    get y() {
        return this._y;
    }

    set y(y) {
        this._y = y;
    }

    info() {
        console.log("x:" + this._x + "   " + "y:" + this._y);
    }
}

class Rectangle extends Shape {
    constructor(x, y, diagonal) {
        super(x, y);
        this._diagonal = diagonal;
    }

    get diagonal() {
        return this._diagonal;
    }

    set diagonal(diagonal) {
        this._diagonal = diagonal;
    }

    info() {
        console.log("x:" + this.x + "   " + "y:" + this.y + "  " + "diagonal:" + this._diagonal);
    }
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    info() {
        console.log("x:" + this.x + "   " + "y:" + this.y + "  " + "radius:" + this._radius);
    }

}
let rectanglea = new Rectangle(1, 2, 3);
rectanglea.info();
let circle = new Circle(4, 5, 6);
circle.info();
