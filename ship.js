const Ship = (shipLength) => {
  const length = shipLength;
  const hitIndex = new Array(shipLength);
  hitIndex.fill(0);
  const sunk = false;
  const hit = (index) => {
    for (let i = 0; i < length; i++) {
      if (i === index) {
        hitIndex[i] = 1;
      }
    }
  };
  const isSunk = () => {
    let totalHits = 0;
    for (let i = 0; i < length; i++) {
      totalHits += hitIndex[i];
    }
    if (totalHits === length) return true;
    return false;
  };
  return {
    length,
    hitIndex,
    sunk,
    hit,
    isSunk,
  };
};

module.exports = Ship;
