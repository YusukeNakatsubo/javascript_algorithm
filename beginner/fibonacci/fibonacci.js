/**
 * Return a fibonacci sequence as an array.
 *
 * @param {number} number
 * @return {number[]}
 */
 module.exports = function fibonacci(number) {
  const fibSequence = [1]

  let currentValue = 1
  let previousValue = 0

  if (number === 1) { return fibSequence }

  let iterationsCounter = number - 1

  while (iterationsCounter) {
    currentValue += previousValue
    previousValue = currentValue - previousValue

    fibSequence.push(currentValue)

    iterationsCounter -= 1
  }

  return fibSequence
}