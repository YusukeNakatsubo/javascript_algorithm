/**
 * @param {*[]} array
 * @return {*[]} result
 */
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] > array[j+1]) {
        let tmp = array[j]
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
    }
  }
  return array;
}
let array = [1, 3, 10, 2, 8];
console.log(bubbleSort(array));