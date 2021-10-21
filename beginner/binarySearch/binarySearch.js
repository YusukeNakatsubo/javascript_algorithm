/**
 * @param {*[]} array
 * @param {function(a, b)}
 * @return {number} result
 */
const binarySearch = (array, number) => {
  let result      = -1,
      seekElement = number,
      startIndex  = 0,
      endIndex    = array.length - 1,
      middleIndex;

  if (array.length < 1) { return result; }
  while (startIndex <= endIndex ) {
    middleIndex = Math.floor((endIndex + startIndex) / 2);
    if (array[middleIndex] === seekElement) {
      result = middleIndex;
      break;
    } else if (array[middleIndex] < seekElement) {
      startIndex = middleIndex + 1;
    } else if (array[middleIndex] > seekElement) {
      endIndex = middleIndex - 1;
    }
  }
  return result;
}
let array = [1, 3, 10, 2, 8].sort((a, b) => a - b);
console.log(binarySearch(array, 2));