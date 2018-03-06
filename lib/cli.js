'use strict'

process.title = 'Dice Roll'

const { argv: [, , ...args] } = process

const test = require('./parse-args')
// const { roll, toDiceNotation } = require('./dice')

// const dice = toDiceNotation({ count, sides })
// const total = roll(dice)

// console.log(total)
const craig = args;
console.log(test.parse(args));