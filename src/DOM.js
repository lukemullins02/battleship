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

export default { renderBoard, showPlayer };
