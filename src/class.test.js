import { Ship } from "./ship";

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
