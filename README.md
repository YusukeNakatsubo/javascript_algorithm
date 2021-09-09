# JavaScript Algorithm
[Tutorial](https://github.com/trekhleb/javascript-algorithms/blob/master/README.ja-JP.md)

```bash
$ npm install -g mocha
```

## Beginner Course

### Factorial(階乗)

```javascript
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
```

#### Tips. 再帰関数
[再帰関数を学ぶと、どんな世界が広がるか](https://qiita.com/drken/items/23a4f604fa3f505dd5ad)

>再帰の意味はとても広いです。自分自身を呼び出す関数を再帰的 (recursive) であると呼び、再帰的な関数のことを再帰関数 (recursive function) と呼びます。また再帰的に関数を呼び出すことを再帰呼び出し (recursive call) と呼びます。とにかく、自分自身を呼び出しさえすれば、再帰的であると言えます。広い概念ですね！！！！！

```javascript
/**
 * @param {number} number
 * @return {number}
 */
module.exports = function factorialRecursive(number) {
  return number > 1 ? number * factorialRecursive(number - 1) : 1
}
```

### Fibonacci(フィボナッチ数列)

```javascript
/**
 * Return a fibonacci sequence as an array.
 *
 * @param {number} number
 * @return {number[]}
 */
 module.exports = function fibonacci(number) {
  const fibSequence = [1]

  let currentValue = 1
  let previousValue = 0

  if (number === 1) { return fibSequence }

  let iterationsCounter = number - 1

  while (iterationsCounter) {
    currentValue += previousValue
    previousValue = currentValue - previousValue

    fibSequence.push(currentValue)

    iterationsCounter -= 1
  }

  return fibSequence
}
```

### Trial Division(素数判定)

```javascript
/**
 * @param {number} number
 * @return {boolean}
 */
 module.exports = function trialDivision(number) {
  // Check if number is integer.
  if (number % 1 !== 0) { return false }

  // If number is less than one then it isn't prime by definition.
  if (number <= 1) { return false }

  // All numbers from 2 to 3 are prime.
  if (number <= 3) { return true }

  // If the number is not divided by 2 then we may eliminate all further even dividers.
  if (number % 2 === 0) { return false }

  // If there is no dividers up to square root of n then there is no higher dividers as well.
  const dividerLimit = Math.sqrt(number);
  for (let divider = 3; divider <= dividerLimit; divider += 2) {
    if (number % divider === 0) { return false }
  }
  return true
}
```

### Euclidean algorithm(ユークリッドの互除法)

```javascript
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
  console.log(`is X = ${x}`)
  console.log(`is Y = ${y}`)
  return (y === 0) ? x : euclideanAlgorithm(y, x % y)
}
```

### Least common multiple

```javascript

```

## Note

### export
>export 文は JavaScript モジュールを作成するときに使用され、モジュールから関数、オブジェクト、またはプリミティブ値へのライブバインディングのエクスポートを行い、import 文を使用した他のプログラムが使用できるようにします。インポートされたモジュールは読み取り専用で、エクスポートされたモジュールが変更されるたびに値が更新されます。

>エクスポートされたモジュールは、宣言のあるなしにかかわらず Strict モードで動作します。export 文は、埋め込みスクリプトでは使えません。

[export](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export)

### Math.sqrt()

>Math.sqrt() 関数は、ある数の平方根を返します。

[Math.sqrt()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)

###  Math.abs()

>Math.abs() 関数は、数値の絶対値を返します。

[Math.abs()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)


