import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.arr = new Array(10).fill(null).map(() => new Array(10).fill(0));
    this.shipObjs = [];
  }

  placeShips() {
    const fill = new Array(10).fill(null).map(() => new Array(10).fill(false));
    const ships = [5, 4, 3, 3, 2];

    while (ships.length != 0) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const verOrNot = Math.floor(Math.random() * 2);

      console.log(verOrNot);

      if (verOrNot === 0) {
        this.checkVertical(x, y, fill, ships);
      } else {
        this.checkHorizontal(x, y, fill, ships);
      }
    }

    return true;
  }

  checkVertical(x, y, fill, ships) {
    let check = false;

    if (!fill[x][y]) {
      const curShip = ships[0];
      if (x - ships.length < 0) {
      } else {
        let checkX = x;
        for (let i = 0; i < curShip; i++) {
          if (fill[checkX][y]) {
            check = true;
            break;
          } else {
            checkX--;
            continue;
          }
        }

        if (!check) {
          const obj = { ship: new Ship(curShip), cords: [] };
          checkX = x;
          for (let i = 0; i < curShip; i++) {
            this.arr[checkX][y] = 1;
            fill[checkX][y] = true;
            obj.cords.push([checkX, y]);
            checkX--;
          }
          this.shipObjs.push(obj);
          ships.shift();
        }
      }
    }
  }

  checkHorizontal(x, y, fill, ships) {
    let check = false;

    if (!fill[x][y]) {
      const curShip = ships[0];

      if (y - ships.length < 0) {
      } else {
        let checkY = y;
        for (let i = 0; i < curShip; i++) {
          if (fill[x][checkY]) {
            check = true;
            break;
          } else {
            checkY--;
            continue;
          }
        }

        if (!check) {
          checkY = y;
          const obj = { ship: new Ship(curShip), cords: [] };
          for (let i = 0; i < curShip; i++) {
            this.arr[x][checkY] = 1;
            fill[x][checkY] = true;
            obj.cords.push([x, checkY]);
            checkY--;
          }
          this.shipObjs.push(obj);
          ships.shift();
        }
      }
    }
  }

  printBoard() {
    for (let i = 0; i < game.arr.length; i++) {
      let str = "";
      for (let j = 0; j < game.arr[i].length; j++) {
        str += this.arr[i][j];
      }
      console.log(str);
    }
  }
}

export { Gameboard };

const game = new Gameboard();

/*
Ships Needed:

5
4
3
3
2

Total: 17

Random number generator: x: [0-9] y: [0-9] Check
Random horizontal/veritcal generator Check
Check if place is already filled/can fit whole ship 



*/
