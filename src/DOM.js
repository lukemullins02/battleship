function renderBoard(arr, str) {
  const container = document.querySelector(".container");
  const half = document.createElement("div");
  const show = document.createElement("p");

  show.classList.add("show");
  half.classList.add("half");

  for (let i = 0; i < arr.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < arr[i].length; j++) {
      const cell = document.createElement("div");
      cell.dataset.x = i;
      cell.dataset.y = j;

      if (arr[i][j] === 1) {
        cell.textContent = "Hi!";
      }

      cell.classList = `cell-${str}`;
      row.appendChild(cell);
    }
    half.appendChild(row);
  }

  container.appendChild(half);
}

function showPlayer(str) {
  if (document.querySelector(".show") === null) {
    const body = document.querySelector("body");
    const show = document.createElement("p");
    show.classList.add("show");

    show.textContent = `${str}`;
    body.prepend(show);
  } else {
    const show = document.querySelector(".show");
    show.textContent = `${str}`;
  }
}

function removeDOM() {
  const container = document.querySelector(".container");
  let child = container.lastElementChild;

  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

function playAgain() {
  const container = document.querySelector(".container");
  const play = document.createElement("p");
  const btn = document.createElement("button");
  const div = document.createElement("div");

  div.classList.add("play-again");

  btn.classList.add("play-again-btn");

  play.textContent = "Play Again";
  btn.textContent = "click";

  div.appendChild(play);
  div.appendChild(btn);
  container.appendChild(div);
}

export default { renderBoard, showPlayer, removeDOM, playAgain };
