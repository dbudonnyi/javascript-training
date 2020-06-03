'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sayHi = function sayHi() {
  console.log('Hi');
};

sayHi();

var Car = /*#__PURE__*/function () {
  function Car() {
    _classCallCheck(this, Car);

    // eslint-disable-next-line no-underscore-dangle
    this._name = 'Car';
  }

  _createClass(Car, [{
    key: "name",
    get: function get() {
      // eslint-disable-next-line no-underscore-dangle
      return this._name;
    }
  }]);

  return Car;
}();

var car = new Car();
console.log(car.name);