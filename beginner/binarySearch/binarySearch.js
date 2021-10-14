/**
 * @param {*[]} array
 * @return {number} result
 */
const binarySearch = (array) => {
  let result      = -1,
      seekElement = 2,
      leftIndex   = 0,
      rightIndex  = array.length - 1,
      middleIndex;

  if (array.length < 1) { return result; }
  while (leftIndex <= rightIndex ) {
    middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    if(array[middleIndex] === seekElement) {
      result = middleIndex;
      break;
    } else if (array[middleIndex] < seekElement) {
      leftIndex = middleIndex + 1;
    } else if (array[middleIndex] > seekElement) {
      rightIndex = middleIndex - 1;
    }
  }
  return result;
}
let array = [1, 3, 10, 2, 8].sort((a, b) => a - b);
console.log(binarySearch(array));