/**
 * @param {*[]} originalArray
 * @return {number[]} result
 */
const bubbleSort = (array) => {
  if (array.length === 0) { return array; }

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }

  return array;
}
let array = [1, 3, 10, 2, 8];
console.log(bubbleSort(array));