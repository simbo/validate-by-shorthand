'use strict';

var assert = require('assert');

var validateValue = require('..'),
    isType = validateValue.isType;

var fixtures = require('./fixtures.js');

describe('isType', function() {

    it('should return expected results when running type tests supported by util.is* functions', function() {
        fixtures.utilTests.forEach(function(f) {
            assert.equal(isType[f[0]](f[1]), true);
            assert.equal(isType[f[0]](f[2]), false);
        });
    });

    it('should return expected results when running custom type tests', function() {
        fixtures.customTests.forEach(function(f) {
            assert.equal(isType[f[0]](f[1]), true);
            if (f.length > 2) {
                assert.equal(isType[f[0]](f[2]), false);
            }
        });
    });

    it('should return expected results when testing for an array or object with elements of a specific type', function() {
        fixtures.extendedTests.forEach(function(f) {
            assert.equal(isType[f[0]](f[1]), true);
            assert.equal(isType[f[0]](f[2]), false);
        });
    });

    it('should provide all type tests in list: ' + fixtures.allShorthands.join(', '), function() {
        // console.log(fixtures.allShorthands);
        assert.deepEqual(Object.keys(isType), fixtures.allShorthands);
    });

});

describe('validateValue', function() {

    it('should validate all tests supported by isType', function() {
        fixtures.allTests.forEach(function(f) {
            assert.equal(validateValue(f[0], f[1]), true);
            if (f.length > 2) {
                assert.equal(validateValue(f[0], f[2]), false);
            }
        });
    });

    it('should validate using a regular expression', function() {
        assert.equal(validateValue(/^[A-Z]+$/, 'ABC'), true);
        assert.equal(validateValue(/^[A-Z]+$/, 'abc'), false);
    });

    it('should validate using a validation function', function() {
        var fn = function(v) {
            return v===5;
        }
        assert.equal(validateValue(fn, 5), true);
        assert.equal(validateValue(fn, 1), false);
    });

    it('should validate using an array all three and return true if any succeeds', function() {
        var arr = ['number<0', /^[a-z]$/i, function(v) { return typeof v === 'string' && v.length>3; }];
        assert.equal(validateValue(arr, -1), true);
        assert.equal(validateValue(arr, 1), false);
        assert.equal(validateValue(arr, 'a'), true);
        assert.equal(validateValue(arr, 'aa'), false);
        assert.equal(validateValue(arr, 'aaaa'), true);
    });

});

