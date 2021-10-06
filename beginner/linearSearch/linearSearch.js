/**
 * @param {*[]} array
 * @param {function(a, b)}
 * @return {number} result
 */
const linearSearch = (array) => {
  let result = -1;
  let seekElement = 2;

  if (array.length < 1) { return result; }
  array.forEach((element, index) => {
    if (element == seekElement) { return result = index; }
  })
  return result;
}
let array = [1, 3, 10, 2, 8];
console.log(linearSearch(array));