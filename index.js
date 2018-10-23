const { TOTAL_LIMIT, addIfPair, countTotal, getNumber } = require('./utils')

/*
 * Task 1:
 * Prelude: You are provided a function called `addIfPair` with the signature:
 * (a, b) => if (b pair): a + b; else: a
 * Excercise:
 * write a function that uses `addIfPair` to calculate the sum of all the
 * pair numbers in the list.
 * This function must take as a parameter the list (Array) and return a Number equal
 * to the sum of all the pairs in the list.
 */

function sumPairs(list) {
  // please answer here
}

/*
 * Task 2:
 * Prelude: The `getNumber` function returns a Promise that resolves to a random number.
 * Unfortunately, this function may randomly fail and the Promise returned
 * would be rejected with a string containing a number.
 * Excercise:
 * Write a function that uses `getNumber` to generate an array of random numbers.
 * The length of this array is not important, but the sum of all of its elements
 * must not be greater than `TOTAL_LIMIT`.
 * Note: If `getNumber` fails, you must extract the number from the error string
 * and use it to continue as you would normally.
 */

function getNumberList(list) {
  // please answer here
}

module.exports = {
  getNumberList,
  sumPairs,
};
