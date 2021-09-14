/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
const pascalTriangleRecursive = (lineNumber) => {
  if (lineNumber === 0) { return [1] }

  // 現在の行の位置
  const currentLineSize = lineNumber + 1
  // 一つ前の行の位置
  const previousLineSize = currentLineSize - 1

  // 現在の行の配列
  const currentLine = []
  // 一つ前の行の配列
  const previousLine = pascalTriangleRecursive(lineNumber - 1)

  for (let numIndex = 0; numIndex < currentLineSize; numIndex += 1) {
    // パスカルの三角形の値を順に取得していく
    // 配列の[0]から値を取得
    const leftCoefficient = (numIndex - 1) >= 0 ? previousLine[numIndex - 1] : 0
    // leftCoefficient の右隣の値を取得
    const rightCoefficient = previousLineSize  > numIndex ? previousLine[numIndex] : 0

    // 値のチェック
    console.log(leftCoefficient)
    console.log(rightCoefficient)
    console.log(`----------${numIndex}`)

    currentLine[numIndex] = leftCoefficient + rightCoefficient
  }

  return currentLine
}
console.log(pascalTriangleRecursive(1))