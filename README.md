validate-by-shorthand
=====================

  > This library offers a wide range of validation tests, easily accessible 
  > via shorthands.

[![npm Package Version](https://img.shields.io/npm/v/validate-by-shorthand.svg?style=flat-square)](https://www.npmjs.com/package/validate-by-shorthand)
[![MIT License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://simbo.mit-license.org)
[![Travis Build Status](https://img.shields.io/travis/simbo/validate-by-shorthand/master.svg?style=flat-square)](https://travis-ci.org/simbo/validate-by-shorthand)

[![Dependencies Status](https://img.shields.io/david/simbo/validate-by-shorthand.svg?style=flat-square)](https://david-dm.org/simbo/validate-by-shorthand)
[![devDependencies Status](https://img.shields.io/david/dev/simbo/validate-by-shorthand.svg?style=flat-square)](https://david-dm.org/simbo/validate-by-shorthand#info=devDependencies)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/simbo/validate-by-shorthand.svg?style=flat-square)](https://codeclimate.com/github/simbo/validate-by-shorthand)
[![Code Climate Test Coverage](https://img.shields.io/codeclimate/coverage/github/simbo/validate-by-shorthand.svg?style=flat-square)](https://codeclimate.com/github/simbo/validate-by-shorthand)

---


## Usage

``` javascript
var validate = require('validate-by-shorthand');

// validate using shorthands
validate('string!empty', 'foo'); // true
validate('string!empty', ''); // false
validate('number>0', 5); // true
validate('number>0', 0); // false
validate('string[]', ['foo', '', 'bar']); // true
validate('string[]', ['foo', '', 5]); // false

// validate using regular expressions
validate(/^[A-Z]+$/, 'ABC'); // true
validate(/^[A-Z]+$/, 'abc'); // false

// validate using functions
var test = function(v) {
    return [1,2,3].indexOf(v) !== -1;
};
validate(test, 2); // true
validate(test, 5); // false

// validate using an array of shorthands, regexps and/or functions
// returning true if any test succeeds
var arr = ['number<0', test, /^[A-Z]$/];
validate(arr, -2); // true
validate(arr, 0); // false
validate(arr, 2); // true
validate(arr, 5); // false
validate(arr, 'A'); // true
validate(arr, 'a'); // true
```


## Shorthands

type tests supported by [`util.is*`](https://nodejs.org/api/util.html) functions:
  - `array`
  - `boolean`
  - `null`
  - `nullorundefined`
  - `number`
  - `string`
  - `symbol`
  - `undefined`
  - `regexp`
  - `object`
  - `date`
  - `error`
  - `function`
  - `primitive`
  - `buffer`

return true for anything
  - `any`  

non-empty of respective type
  - `string!empty`  
  - `array!empty`  
  - `object!empty`  

number tests
  - `number>0`
  - `number>=0`
  - `number<0`
  - `number<=0`
  - `integer`
  - `float`

tests for an array with elements of respective type:
  - `array[]`
  - `boolean[]`
  - `number[]`
  - `string[]`
  - `symbol[]`
  - `regexp[]`
  - `object[]`
  - `date[]`
  - `error[]`
  - `function[]`
  - `primitive[]`
  - `buffer[]`
  - `string!empty[]`
  - `array!empty[]`
  - `object!empty[]`
  - `number>0[]`
  - `number>=0[]`
  - `number<0[]`
  - `number<=0[]`
  - `integer[]`
  - `float[]`

test for an object with properties of an respective type:
  - `array{}`
  - `boolean{}`
  - `number{}`
  - `string{}`
  - `symbol{}`
  - `regexp{}`
  - `object{}`
  - `date{}`
  - `error{}`
  - `function{}`
  - `primitive{}`
  - `buffer{}`
  - `string!empty{}`
  - `array!empty{}`
  - `object!empty{}`
  - `number>0{}`
  - `number>=0{}`
  - `number<0{}`
  - `number<=0{}`
  - `integer{}`
  - `float{}`


## License

[MIT &copy; 2015 Simon Lepel](http://simbo.mit-license.org/)
