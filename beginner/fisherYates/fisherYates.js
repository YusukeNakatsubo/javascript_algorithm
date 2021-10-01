/**
 * @param {*[]} originalArray
 * @return {*[]}
 */
const fisherYates = (originalArray) => {
  // 配列をコピーして新しい配列オブジェクトを返す
  const array = originalArray.slice(0);

  // 配列の要素の位置を入れ替える
  for (let i = (array.length - 1); i > 0; i -= 1) {
    // ランダムなインデックス番号を発行
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    // console.log(array);
  }

  return array;
}
console.log(fisherYates([0, 1, 2, 3, 4]));