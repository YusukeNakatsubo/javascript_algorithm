/**
 * @param {*[]} originalArray
 * @return {number[]} result
 */
const insertionSort = (array) => {
  if (array.length === 0) { return array; }

  for (let i = 1; i < array.length; i += 1) {
    let currentNumber = array[i];
    let previousIndex = i - 1;
    while (previousIndex > - 1 && currentNumber < array[previousIndex]) {
      // 現在の値と前の値と比較し、大きい値を後ろへ書き換える
      array[previousIndex + 1] = array[previousIndex];
      previousIndex --;
    }
    // 先頭の値を書き換える
    array[previousIndex + 1] = currentNumber;
  }

  return array;
}
let array = [1, 3, 10, 2, 8];
console.log(insertionSort(array));