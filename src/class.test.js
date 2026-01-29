import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

test("Hits don't inrease", () => {
  const ship = new Ship(3);

  ship.hit();
  ship.hit();

  expect(ship.hits).toBe(2);
});

test("Sunk doesn't change to false", () => {
  const ship = new Ship(2);

  ship.hit();
  ship.isSunk();
  ship.hit();
  ship.isSunk();

  expect(ship.sunk).toBeTruthy();
});

test("Gameboard size not 100 cells", () => {
  const game = new Gameboard();
  let count = 0;

  for (let i = 0; i < game.arr.length; i++) {
    for (let j = 0; j < game.arr[i].length; j++) {
      count++;
    }
  }

  expect(count).toBe(100);
});

test("Check if placeShips filled array works", () => {
  const game = new Gameboard();

  expect(game.placeShips()).toBeTruthy();
});

test("Check if randomly placed", () => {
  const game = new Gameboard();
  let count = 0;

  game.placeShips();

  for (let i = 0; i < game.arr.length; i++) {
    for (let j = 0; j < game.arr[i].length; j++) {
      if (game.arr[i][j] === 1) {
        count++;
      }
    }
  }

  expect(count).toBe(17);
});

test("If shipObjs proper length", () => {
  const game = new Gameboard();
  game.placeShips();

  console.log(game.shipObjs);

  expect(game.shipObjs.length).toBe(5);
});
