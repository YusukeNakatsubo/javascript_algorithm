/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
module.exports = function hammingDistance(a,b) {
  // ガード節 処理すべきでないコードは最初に返却することで、その後の処理をシンプルに書く
  if (a.length !== b.length) { throw new Error('Strings must be of the same length'); }

  let distance = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) { distance += 1; }
  }
  return distance;
}