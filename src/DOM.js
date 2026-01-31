function title() {
  const container = document.querySelector(".container");
  const title = document.createElement("p");
  title.classList.add("title");

  title.textContent = "BATTLESHIP";

  container.append(title);
}

function startGame() {
  const container = document.querySelector(".container");
  const btn = document.createElement("button");
  const randomBtn = document.createElement("button");
  const div = document.createElement("div");

  container.classList.add("intro");

  btn.classList.add("start-btn");
  randomBtn.classList.add("random-btn");
  div.classList.add("start");

  btn.textContent = "Begin Engagement";

  randomBtn.textContent = "Randomize Fleet";

  div.append(btn);
  div.append(randomBtn);

  container.append(div);
}

function renderBoard(arr, str) {
  const container = document.querySelector(".container");

  container.classList.remove("intro");
  container.classList.remove("end");

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

      if (arr[i][j] === 1 && str === "player") {
        cell.textContent = "X";
        cell.classList.add("ship");
      }

      const className = `cell-${str}`;

      cell.classList.add(className);
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
  const body = document.querySelector("body");
  const btn = document.createElement("button");
  const div = document.createElement("div");

  body.classList.add("end");

  div.classList.add("play-again");

  btn.classList.add("play-again-btn");

  btn.textContent = "Redploy";

  div.appendChild(btn);
  body.appendChild(div);
}

export default {
  renderBoard,
  showPlayer,
  removeDOM,
  playAgain,
  startGame,
  title,
};
