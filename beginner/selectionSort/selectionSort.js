/**
 * @param {*[]} originalArray
 * @return {number[]} result
 */
const selectionSort = (array) => {
  if (array.length === 0) { return array; }

  for (let i = 0; i < array.length; i += 1) {
    // 最小値のインデックス番号を探す
    let minNumber = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[minNumber]) {
        minNumber = j;
      }
    }
    // 最小値のインデックス番号もつ値を、先頭から順に入れ替えていく
    if (minNumber !== 1) {
      let tmp = array[i];
      array[i] = array[minNumber];
      array[minNumber] = tmp;
    }
  }

  return array;
}
let array = [1, 3, 10, 2, 8];
console.log(selectionSort(array));