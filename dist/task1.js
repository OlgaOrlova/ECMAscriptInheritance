'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
    function Shape(x, y) {
        _classCallCheck(this, Shape);

        this._x = x;
        this._y = y;
    }

    _createClass(Shape, [{
        key: "info",
        value: function info() {
            console.log("x:" + this._x + "   " + "y:" + this._y);
        }
    }, {
        key: "x",
        get: function get() {
            return this._x;
        },
        set: function set(x) {
            this._x = x;
        }
    }, {
        key: "y",
        get: function get() {
            return this._y;
        },
        set: function set(y) {
            this._y = y;
        }
    }]);

    return Shape;
}();

var Rectangle = function (_Shape) {
    _inherits(Rectangle, _Shape);

    function Rectangle(x, y, diagonal) {
        _classCallCheck(this, Rectangle);

        var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, x, y));

        _this._diagonal = diagonal;
        return _this;
    }

    _createClass(Rectangle, [{
        key: "info",
        value: function info() {
            console.log("x:" + this.x + "   " + "y:" + this.y + "  " + "diagonal:" + this._diagonal);
        }
    }, {
        key: "diagonal",
        get: function get() {
            return this._diagonal;
        },
        set: function set(diagonal) {
            this._diagonal = diagonal;
        }
    }]);

    return Rectangle;
}(Shape);

var Circle = function (_Shape2) {
    _inherits(Circle, _Shape2);

    function Circle(x, y, radius) {
        _classCallCheck(this, Circle);

        var _this2 = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, x, y));

        _this2._radius = radius;
        return _this2;
    }

    _createClass(Circle, [{
        key: "info",
        value: function info() {
            console.log("x:" + this.x + "   " + "y:" + this.y + "  " + "radius:" + this._radius);
        }
    }, {
        key: "radius",
        get: function get() {
            return this._radius;
        },
        set: function set(radius) {
            this._radius = radius;
        }
    }]);

    return Circle;
}(Shape);

var rectanglea = new Rectangle(1, 2, 3);
rectanglea.info();
var circle = new Circle(4, 5, 6);
circle.info();