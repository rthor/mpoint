/*
|--------------------------------------------------------------------------
| Helper
|--------------------------------------------------------------------------
*/
var fillWithValues = function () {
  if (arguments.length === this.dimension) {
    for (var i = 0; i < arguments.length; i++) {
      this.point[this.designation + (i + 1)] = arguments[i];
    }
  }

  return this.point;
};

/*
|--------------------------------------------------------------------------
| Initializer
|--------------------------------------------------------------------------
*/
var PointConstructor = function (dimension, designation) {
  this.dimension = dimension < 2 ? 2 : dimension;
  this.designation = designation || 'a';
  this.point = Object.create(null);

  for (var i = 0; i < this.dimension; i++) {
    this.point[this.designation + (i + 1)] = 0;
  }

  return fillWithValues.bind(this);
};

/*
|--------------------------------------------------------------------------
| The Point Class
|--------------------------------------------------------------------------
*/
var Point = function () {
  var args = Array.prototype.slice.call(arguments);

  if (isNaN( args[args.length - 1] )) {
    PointConstructor.call(this, args.length - 1, args.pop()).apply(this, args);
  } else {
    PointConstructor.call(this, args.length).apply(this, args);
  } 

  return this;
};

Point.prototype = {
  // Conversion
  toArray: function() {
    var arr = [];

    for (var p in this.point) {
      arr.push(this.point[p]);
    }

    return arr;
  },
  toString: function() {
    return this.toArray().join(',');
  },
  // Getters / Setters
  at: function (index) {
    return this.get( this.key(index) );
  },
  key: function (index) {
    if (index < 0 || index > this.dimension - 1) {
      throw new RangeError('Index must be a number from 1 to the dimension.');
    }
    return this.designation + (index + 1);
  },
  set: function (key, value) {
    this.point[ key ] = value;
    return this;
  },
  get: function (key) {
    return this.point[ key ];
  },

  // Math Operations
  add: function (target) {
    if (!(target instanceof Point)) {
      throw new TypeError('Target needs to be of type Point.');
    }

    if (target.dimension !== this.dimension) {
      throw new TypeError('Target and this Point need to have the same dimension.');
    }

    for (var index = 0; index < this.dimension; index++) {
      this.set(this.key(index), this.at(index) + target.at(index));
    }
    
    return this;
  },
  subtract: function (target) {
    if (!(target instanceof Point)) {
      throw new TypeError('Target needs to be of type Point.');
    }

    if (target.dimension !== this.dimension) {
      throw new TypeError('Target and this Point need to have the same dimension.');
    }

    for (var index = 0; index < this.dimension; index++) {
      this.set(this.key(index), this.at(index) - target.at(index));
    }

    return this;
  },
  scale: function (scalar) {
    if (scalar && isNaN(scalar)) {
      scalar = 1;
    }

    for (var index = 0; index < this.dimension; index++) {
      this.set(this.key(index), scalar * this.at(index));
    }

    return this;
  },
};

/*
|--------------------------------------------------------------------------
| Expose
|--------------------------------------------------------------------------
*/
module.exports = Point;