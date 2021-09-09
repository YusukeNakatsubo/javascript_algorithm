/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 最大公約数を求める
const euclideanAlgorithm = (numberX, numberY) => {
  const x = Math.abs(numberX)
  const y = Math.abs(numberY)

  return (y !== 0) ? euclideanAlgorithm(y, x % y) : x
}

// 最小公倍数を求める
// -> 2つの自然数 𝑎,𝑏 の最小公倍数 -> 𝑎 * 𝑏 / 𝑑(最大公約数)
module.exports = function leastCommonMultiple(a, b) {
  return ((a !== 0) || (b !== 0)) ? Math.abs(a * b) / euclideanAlgorithm(a, b) : 0
}