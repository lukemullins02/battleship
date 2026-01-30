import "./styles.css";

import { Player } from "./player.js";
import dom from "./DOM.js";

const container = document.querySelector(".container");

const player = new Player();
const cpu = new Player();

player.board.placeShips();
cpu.board.placeShips();

dom.renderBoard(player.board.arr, "player");

dom.renderBoard(cpu.board.arr, "cpu");

let curPlayer = true;

dom.showPlayer("Player's Turn");

container.addEventListener("click", (e) => {
  if (!curPlayer) return;
  if (!e.target.classList.contains("cell-cpu")) return;
  if (e.target.textContent == "X" || e.target.textContent == "O") {
    dom.showPlayer("Position already filled! Try again.");
    return;
  }

  curPlayer = false;

  if (
    cpu.board.receiveAttack([
      Number(e.target.dataset.x),
      Number(e.target.dataset.y),
    ]) === true
  ) {
    e.target.textContent = "X";
  } else {
    e.target.textContent = "O";
  }

  dom.showPlayer("CPU's Turn");

  setTimeout(() => {
    let marked = true;

    while (marked) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);

      const check = player.board.receiveAttack([x, y]);

      if (check !== undefined) {
        const cell = document.querySelector(
          `div[data-x="${x}"][data-y="${y}"]`,
        );

        if (check === true) {
          cell.textContent = "X";
        } else {
          cell.textContent = "O";
        }

        marked = false;
      }
    }
    curPlayer = true;
    dom.showPlayer("Player");
  }, 2000);
});
