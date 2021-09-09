/**
 * @param {number} numberX
 * @param {number} numberY
 * @return {number}
 */
const euclideanAlgorithm = (numberX, numberY) => {
  const x = Math.abs(numberX)
  const y = Math.abs(numberY)

  // ユークリッドの互除法 -> 割り切れるまであまりで互いに割り（除法）続ける
  console.log(`is X = ${x}`)
  console.log(`is Y = ${y}`)
  return (y !== 0) ? euclideanAlgorithm(y, x % y) : x
}
// $ node euclidean.edit.js
console.log(euclideanAlgorithm(252,105))
// is X = 252
// is Y = 105
// is X = 105
// is Y = 42
// is X = 42
// is Y = 21
// is X = 21
// is Y = 0
// -> 21