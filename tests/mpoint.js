var tape = require('tape');
var Point = require('../index');

/*
|--------------------------------------------------------------------------
| Base
|--------------------------------------------------------------------------
*/
tape('two dimensional by default', function (test) {
  test.plan(1);
  test.equals(new Point().dimension, 2);
});

tape('has a designation', function (test) {
  test.plan(2);
  test.equals(new Point().designation, 'a');
  test.equals(new Point('t').designation, 't');
});

/*
|--------------------------------------------------------------------------
| Arithmetic
|--------------------------------------------------------------------------
*/
tape('adds two points of same dimension', function (test) {
  test.plan(1);
  
  var p1 = new Point(1,6);
  var p2 = new Point(2,9);

  test.equal(p1.add(p2).toString(), '3,15');
});

tape('substracts two points of same dimension', function (test) {
  test.plan(1);
  
  var p1 = new Point(1,6);
  var p2 = new Point(2,9);

  test.equal(p1.subtract(p2).toString(), '-1,-3');
});

tape('scales a point by a number', function (test) {
  test.plan(1);
  test.equal(new Point(1,6).scale(3).toString(), '3,18');
});