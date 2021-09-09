/**
 * Recursive version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {number} numberX
 * @param {number} numberY
 * @return {number}
 */
 module.exports = function euclideanAlgorithm(numberX, numberY) {
  // Make input numbers positive.
  const x = Math.abs(numberX)
  const y = Math.abs(numberY)

  // To make algorithm work faster instead of subtracting one number from the other
  // we may use modulo operation.
  // ユークリッドの互除法 -> 割り切れるまであまりで互いに割り（除法）続ける
  // console.log(`is X = ${x}`)
  // console.log(`is Y = ${y}`)
  return (y === 0) ? x : euclideanAlgorithm(y, x % y)
}