'use strict';

var utilTests = [
        ['array', [], true],
        ['boolean', true, 5],
        ['null', null, true],
        ['nullorundefined', null, true],
        ['nullorundefined', undefined, true],
        ['number', 5, true],
        ['string', 'foo', true],
        ['symbol', Symbol('foo'), true],
        ['undefined', undefined, true],
        ['regexp', /a/i, true],
        ['object', {}, true],
        ['date', new Date(), true],
        ['error', new Error(), true],
        ['function', function() {}, true],
        ['primitive', 5, {}],
        ['buffer', new Buffer('foo'), true],
    ],

    customTests = [
        ['any', true],
        ['string!empty', 'foo', ''],
        ['array!empty', [1], []],
        ['object!empty', {a: 1}, {}],
        ['number>0', 1, 0],
        ['number>=0', 1, -1],
        ['number<0', -1, 0],
        ['number<=0', -1, 1],
        ['integer', 1, 0.5],
        ['float', 0.5, 1]
    ],

    excludeFromExtend = [
        'any',
        'null',
        'undefined',
        'nullorundefined'
    ],

    allShorthands = [
        'any',
        'string!empty',
        'array!empty',
        'object!empty',
        'number>0',
        'number>=0',
        'number<0',
        'number<=0',
        'integer',
        'float',
        'array',
        'boolean',
        'null',
        'nullorundefined',
        'number',
        'string',
        'symbol',
        'undefined',
        'regexp',
        'object',
        'date',
        'error',
        'function',
        'primitive',
        'buffer',
        'array[]',
        'array{}',
        'boolean[]',
        'boolean{}',
        'number[]',
        'number{}',
        'string[]',
        'string{}',
        'symbol[]',
        'symbol{}',
        'regexp[]',
        'regexp{}',
        'object[]',
        'object{}',
        'date[]',
        'date{}',
        'error[]',
        'error{}',
        'function[]',
        'function{}',
        'primitive[]',
        'primitive{}',
        'buffer[]',
        'buffer{}',
        'string!empty[]',
        'string!empty{}',
        'array!empty[]',
        'array!empty{}',
        'object!empty[]',
        'object!empty{}',
        'number>0[]',
        'number>0{}',
        'number>=0[]',
        'number>=0{}',
        'number<0[]',
        'number<0{}',
        'number<=0[]',
        'number<=0{}',
        'integer[]',
        'integer{}',
        'float[]',
        'float{}'
    ],

    extendedTests = utilTests.concat(customTests).filter(function(type) {
        return excludeFromExtend.indexOf(type[0]) === -1;
    }).reduce(function(extended, test) {
        extended.push(
            [test[0] + '[]', [test[1]], [test[2]]],
            [test[0] + '{}', {a: test[1]}, {a: test[2]}
        ]);
        return extended;
    }, []),

    fixtures = {
        utilTests: utilTests,
        customTests: customTests,
        extendedTests: extendedTests,
        allTests: utilTests.concat(customTests, extendedTests),
        allShorthands: allShorthands
    };

module.exports = fixtures;
