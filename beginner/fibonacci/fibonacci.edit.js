/**
 * Review Fibonacci Number
 *
 * @param {number} number
 * @return {number[]}
 *
 */
module.exports = function fibonacci_edit(number) {
  // 初期値を設定
  const fibSequence = [1]
  let currentValue = 1
  let previousValue = 0

  // テストケースの引数が 1 だったら [1] （初期値）を返す
  if (number === 1) return fibSequence

  // シンプルなケースで考えてみる -> 数列の性質を考える
  // -> [1, 1, 2, 3, 5]
  // カウンターを定義
  let iterationsCounter = number - 1
  while (iterationsCounter) {
    // 現在の値を取得する
    currentValue += previousValue
    // 前の値を取得する
    previousValue = currentValue - previousValue
    // 配列に現在の値を入れる
    fibSequence.push(currentValue)
    // カウンターの値を減算する
    iterationsCounter -= 1
  }
  return fibSequence
}