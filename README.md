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

### 再帰関数
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

## Note

### export
>export 文は JavaScript モジュールを作成するときに使用され、モジュールから関数、オブジェクト、またはプリミティブ値へのライブバインディングのエクスポートを行い、import 文を使用した他のプログラムが使用できるようにします。インポートされたモジュールは読み取り専用で、エクスポートされたモジュールが変更されるたびに値が更新されます。

>エクスポートされたモジュールは、宣言のあるなしにかかわらず Strict モードで動作します。export 文は、埋め込みスクリプトでは使えません。

[export](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export)
