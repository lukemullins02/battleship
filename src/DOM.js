function renderBoard(arr) {
  const container = document.querySelector(".container");
  const half = document.createElement("div");
  half.classList.add("half");

  for (let i = 0; i < arr.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < arr[i].length; j++) {
      const cell = document.createElement("div");
      cell.dataset.x = i;
      cell.dataset.y = j;
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    half.appendChild(row);
  }

  container.appendChild(half);
}

export default { renderBoard };
