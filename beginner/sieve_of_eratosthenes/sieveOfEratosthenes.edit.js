/**
 * @param {number} maxNumber
 * @return {number[]}
 */
const sieveOfEratosthenes = (maxNumber) => {
  // 入力された要素数と配列の要素数を揃える
  const isPrime = new Array(maxNumber + 1).fill(true)
  // console.log(isPrime) -> [true, ... true]
  // 0,1 はカウントしない
  isPrime[0] = false
  isPrime[1] = false
  // console.log(isPrime) -> [false, false, ... true]

  const primes = []

  // 0,1 はカウントしない -> numberの初期値は 2 -> 2から処理を開始
  for (let number = 2; number <= maxNumber; number += 1) {
    // 配列に true が残っている場合、処理を実行する
    if (isPrime[number] === true) {
      // 配列内のfalseに等しい値には処理を実行しない -> 4, 6, 8 ... -> 処理を実行しない
      primes.push(number)
      // console.log(primes) -> ex [ 2 ] -> [ 2, 3 ] -> [ 2, 3, 5 ] ...

      let nextNumber = number * number
      // console.log(nextNumber) -> ex 4 -> 9 -> 25 -> 49 -> 121 ...

      // ある倍数の処理を開始する
      // 入力された値以下になるまで、処理を実行する
      // 入力された値が 100 だった場合、nextNumberは 121 = 11*11 となり処理を実行しない
      while (nextNumber <= maxNumber) {
        // 倍数は false に置き換える
        isPrime[nextNumber] = false
        // console.log(isPrime[nextNumber])
        nextNumber += number
        // console.log(nextNumber) -> ex 6, 8, 10, ...
      }
      // ある倍数の処理を終了する
    }
    // 素数のみ配列にpushされる
    // console.log(primes) -> ex [ 2 ] -> [ 2, 3 ]
  }
  return primes
}
console.log(sieveOfEratosthenes(100))