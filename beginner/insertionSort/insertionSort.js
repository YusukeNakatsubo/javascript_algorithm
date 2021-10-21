/**
 * @param {*[]} originalArray
 * @return {number[]} result
 */
const insertionSort = (array) => {
  if (array.length === 0) { return array; }

  for (let i = 1; i < array.length; i += 1) {
    let currentNumber = array[i];
    let j = i - 1;
    while (j > - 1 && currentNumber < array[j]) {
      array[j + 1] = array[j];
      j --;
    }
    array[j + 1] = currentNumber;
    console.log(currentNumber);
    console.log(array);
    console.log('----------')
  }

  return array;
}
let array = [1, 3, 10, 2, 8];
console.log(insertionSort(array));