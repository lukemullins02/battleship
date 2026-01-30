import "./styles.css";

import { Player } from "./player.js";
import dom from "./DOM.js";

const container = document.querySelector(".container");

const player = new Player();
const cpu = new Player();

player.board.placeShips();
cpu.board.placeShips();

dom.renderBoard(player.board.arr);

dom.renderBoard(cpu.board.arr);

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("cell")) return;

  if (
    cpu.board.receiveAttack([
      Number(e.target.dataset.x),
      Number(e.target.dataset.y),
    ]) === true
  ) {
    e.target.textContent = "X";
  }
});
