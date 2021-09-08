/**
 * @param {number} number
 * @return {number}
 */
module.exports = function factorialRecursive(number) {
  return number > 1 ? number * factorialRecursive(number - 1) : 1
}