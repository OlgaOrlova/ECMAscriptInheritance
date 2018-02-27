'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Square = function () {
    function Square(side) {
        _classCallCheck(this, Square);

        this._side = side;
    }

    _createClass(Square, [{
        key: "perimeter",
        value: function perimeter() {
            return this._side * 4;
        }
    }, {
        key: "side",
        get: function get() {
            return this._side;
        },
        set: function set(value) {
            this._side = value;
        }
    }]);

    return Square;
}();

var CubeOne = function (_Square) {
    _inherits(CubeOne, _Square);

    function CubeOne(side) {
        _classCallCheck(this, CubeOne);

        return _possibleConstructorReturn(this, (CubeOne.__proto__ || Object.getPrototypeOf(CubeOne)).call(this, side));
    }

    _createClass(CubeOne, [{
        key: "perimeter",
        value: function perimeter() {
            console.log("Perimeter CubeOne: " + this.side * 12);
        }
    }]);

    return CubeOne;
}(Square);

var CubeTwo = function (_Square2) {
    _inherits(CubeTwo, _Square2);

    function CubeTwo(side) {
        _classCallCheck(this, CubeTwo);

        return _possibleConstructorReturn(this, (CubeTwo.__proto__ || Object.getPrototypeOf(CubeTwo)).call(this, side));
    }

    _createClass(CubeTwo, [{
        key: "perimeter",
        value: function perimeter() {
            var parentPerimeter = _get(CubeTwo.prototype.__proto__ || Object.getPrototypeOf(CubeTwo.prototype), "perimeter", this).call(this);
            console.log("Perimeter CubeTwo: " + (this.side * 8 + parentPerimeter));
        }
    }]);

    return CubeTwo;
}(Square);

var cubeOne = new CubeOne(2);
cubeOne.perimeter();
var cubeTwo = new CubeTwo(2);
cubeTwo.perimeter();