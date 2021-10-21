/**
 * @param {*[]} originalArray
 * @return {number[]} result
 */
const selectionSort = (array) => {
  if (array.length === 0) { return array; }

  for (let i = 0; i < array.length; i += 1) {
    // 最小値のインデックス番号を探す
    let minIndex = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // 最小値のインデックス番号もつ値を入れ替える
    if (minIndex !== 1) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}
let array = [1, 3, 10, 2, 8];
console.log(selectionSort(array));