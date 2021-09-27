/**
 * @param {number} base
 * @param {number} power
 * @return {number}
 */
module.exports = function fastPowering(base, power) {
  if (power === 0) { return 1; }

  // even
  if (power % 2 === 0) {
    const multiplier = fastPowering(base, power / 2);
    return multiplier * multiplier;
  }

  // odd
  const multiplier = fastPowering(base, Math.floor(power / 2));
  return multiplier * multiplier * base;
}