
const parseArgs = require('../lib/parse-args.js')
const { assert: { isFunction, isNotNaN, isString, isObject } } = require('chai');

describe('parse-args module', () => {
    let args = [1, 6];
    describe('module.exports', () => {
        it('should be a function lol', () => {
            isFunction(parseArgs);
        });
        it('returns an object', () => {
            isObject(parseArgs(args));
        })
    })
})
