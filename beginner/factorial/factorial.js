/**
 * @param {number} number
 * @return {number}
 */
module.exports = function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }
  return result;
}
