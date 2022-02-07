/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
 function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  let maxSockPair = 0;
  let singleSock = [];
  cleanPile = cleanPile.sort((a, b) => {
    return a - b;
  })
  dirtypile = dirtyPile.sort((a, b) => {
    return a - b;
  })
  for (let x = 0; x < cleanPile.length; x++) {
    if (cleanPile[x] === cleanPile[x + 1]) {
      maxSockPair++
      cleanPile.splice(x, 1
        )
    }
    else {
      singleSock.push(cleanPile[x]);
    }
  }
  for (let y = 0; y < singleSock.length; y++) {
    if (dirtyPile.includes(singleSock[y]) && noOfWashes > 0) {
      dirtyPile.splice(y, 1);
      maxSockPair++
      noOfWashes--
    }
  }
  for (let z = 0; z < dirtyPile.length; z++) {
    if (dirtyPile[z] === dirtyPile[z + 1] && noOfWashes > 1) {
      maxSockPair++
      noOfWashes -= 2
      dirtyPile.splice(z, 1);
    }
  }
  return maxSockPair;
}
module.exports = getMaxPairs;
