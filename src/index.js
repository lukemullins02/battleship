import "./styles.css";

import { Player } from "./player.js";
import dom from "./DOM.js";

const container = document.querySelector(".container");
const body = document.querySelector("body");

dom.title();
let player = new Player();
player.board.placeShips();
dom.renderBoard(player.board.arr, "player");
dom.startGame();

let cpu;

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("start-btn")) return;

  dom.removeDOM();

  cpu = new Player();

  cpu.board.placeShips();

  dom.renderBoard(player.board.arr, "player");

  dom.renderBoard(cpu.board.arr, "cpu");
  dom.showPlayer("Player's Turn");
});

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("random-btn")) return;

  player = new Player();

  player.board.placeShips();

  dom.removeDOM();

  dom.title();

  dom.renderBoard(player.board.arr, "player");

  dom.startGame();
});

let curPlayer = true;

body.addEventListener("click", (e) => {
  if (!e.target.classList.contains("play-again-btn")) return;

  const div = document.querySelector(".play-again");
  const show = document.querySelector(".show");

  div.remove();
  show.remove();

  dom.removeDOM();

  dom.title();

  dom.renderBoard(player.board.arr, "player");

  dom.startGame();

  curPlayer = true;
});

container.addEventListener("click", (e) => {
  if (!curPlayer) return;
  if (!e.target.classList.contains("cell-cpu")) return;
  if (e.target.textContent == "X" || e.target.textContent == "O") {
    dom.showPlayer("Position already filled! Try again.");
    return;
  }
  if (cpu.board.checkSunk() || player.board.checkSunk()) return;

  curPlayer = false;

  if (
    cpu.board.receiveAttack([
      Number(e.target.dataset.x),
      Number(e.target.dataset.y),
    ]) === true
  ) {
    e.target.textContent = "X";
    e.target.classList.add("hit");

    if (cpu.board.checkSunk()) {
      dom.showPlayer("Game Over! You won.");
      dom.playAgain();
      return;
    }
  } else {
    e.target.textContent = "X";
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
          cell.classList.add("hit");

          if (player.board.checkSunk()) {
            dom.showPlayer("Game Over! You lost.");
            dom.playAgain();
            return;
          }
        } else {
          cell.textContent = "X";
        }

        marked = false;
      }
    }
    curPlayer = true;
    dom.showPlayer("Player's Turn");
  }, 700);
});
