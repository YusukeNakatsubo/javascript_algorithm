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

## Note

### export
>export 文は JavaScript モジュールを作成するときに使用され、モジュールから関数、オブジェクト、またはプリミティブ値へのライブバインディングのエクスポートを行い、import 文を使用した他のプログラムが使用できるようにします。インポートされたモジュールは読み取り専用で、エクスポートされたモジュールが変更されるたびに値が更新されます。

>エクスポートされたモジュールは、宣言のあるなしにかかわらず Strict モードで動作します。export 文は、埋め込みスクリプトでは使えません。

[export](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export)
