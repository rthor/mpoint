# Geometric Points for JavaScript

Points implemented for multidimensional use and working arithmetic.

![Travis-CI](https://api.travis-ci.org/rthor/mpoint.png)

## Usage

Import the thing using for example node and then just create a new Point. Easy right?

```javascript
var theZeroPointIn2d = new Point(); 
var my5DPoint = new Point(1, 8, 9, 0, 3); 
```

## API

```javascript
var Point = require('mpoint');
```

### var point = new Point();
Create a new Point object with optional arguments. The number of arguments determines the dimension of the point. No arguments will create a point in two dimensions zero initialized. 

The last argument can be a character to determine designation. 

```javascript
var p1 = new Point(); // (0, 0)
var p2 = new Point(1,9,7); // (1,9,7)
```

### point1.add( point2 )
Add `point2` to `point1`.

Returns modified `point1`.

### point1.subtract( point2 )
Subtracts `point2` from `point1`.

Returns modified `point1`.

### point1.scale( number )
Scale the `point` by `number`.

Returns modified `point`.

### point.toArray()
Returns an array representation of the point.

### point.toString()
Returns an string representation of the point.

```javascript
new Point(1,9,7).toString(); // 1,9,7
```

## The MIT License (MIT)

Copyright (c) 2014 Ragnar Þór Valgeirsson (rthor) http://rthor.is

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.