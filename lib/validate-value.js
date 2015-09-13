'use strict';

var is = require('./is-type.js');

function multivalidateValue(validate, value) {
    var context = this || undefined;
    return is['array!empty'](validate) && validate.filter(function(v) {
        return is.string(v) || is.function(v) || is.regexp(v);
    }).reduce(function(test, v) {
        return test || validateValue.call(context, v, value);
    }, false);
}

function validateValue(validate, value) {
    var context = this || undefined;
    if (is.string(validate)) {
        return is[validate](value);
    }
    if (is.function(validate)) {
        return validate.call(context, value);
    }
    if (is.regexp(validate)) {
        return is.string(value) && value.match(validate)!==null;
    }
    return multivalidateValue.call(context, validate, value);
}

module.exports = validateValue;
