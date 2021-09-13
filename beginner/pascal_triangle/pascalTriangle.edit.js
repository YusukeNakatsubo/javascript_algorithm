/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
// lineNumber 目の配列を出力
// const pascalTriangle = (lineNumber) => {
//   const currentLine = [1]

//   const currentLineSize = lineNumber + 1

//   for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
//     // I don't understand this script.
//     // currentLine[numIndex] = (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex

//     currentLine[numIndex] = (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex
//     // console.log(currentLine[numIndex - 1]) // ex 1, 2, 3 ...
//     // console.log((lineNumber - numIndex + 1)) //ex 3, 2, 1...
//     // console.log(currentLine[numIndex]) // ex 3, 3, 1
//     // console.log('----------')
//   }

//   return currentLine // ex [1, 3, 3, 1]
// }
// console.log(pascalTriangle(3))

// Another way to describe it.
// 配列をすべて出力する
const pascalTriangle = (lineNumber) => {
  const result = [[1]]
  if (lineNumber === 1) { return result }
  const lastLineNumber = lineNumber
  for(let i = 1; i < lastLineNumber; i += 1) {
    // 配列のインデックス[0]の値
    let tmp = [1]
    if (i > 1) {
      for(let j = 1;j < i; j += 1) {
        // 配列の要素数（段数）分、配列に要素を追加する
        tmp.push(result[i - 1][j - 1] + result[i - 1][j])
        console.log(result[i - 1][j - 1] + result[i - 1][j])
        // ex -> 4(=1+3), 6(=3+3), 4(=3+1)
        console.log('----------')
      }
    }
    // 配列のインデックス[n]の値
    tmp.push(1)
    result.push(tmp)
  }
  return result
}
console.log(pascalTriangle(5))