const ship = require("./ship");

const someShip = ship(4);

describe("testing Ship object", () => {
  test("test Ship.hit()", () => {
    someShip.hit(1);
    expect(someShip.hitIndex).toEqual([0, 1, 0, 0]);
  });

  test("test Ship.isSunk()", () => {
    expect(someShip.isSunk()).toBe(false);
  });

  test("test Ship.isSunk() after sinking", () => {
    someShip.hit(0);
    someShip.hit(3);
    someShip.hit(2);
    expect(someShip.isSunk()).toBe(true);
  });
});
