function createTable() {
  const table = document.getElementById("myTable");
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("td");
      cell.textContent = `${i + 1},${j + 1}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

function addTableListeners() {
  const table = document.getElementById("myTable");

  table.addEventListener("mouseover", function (event) {
    if (event.target.tagName === "TD") {
      const cell = event.target;
      highlightRowAndColumn(cell, true);
    }
  });

  table.addEventListener("mouseout", function (event) {
    if (event.target.tagName === "TD") {
      const cell = event.target;
      highlightRowAndColumn(cell, false);
    }
  });
}

function highlightRowAndColumn(cell, highlight) {
  const table = document.getElementById("myTable");
  const rowIndex = cell.parentElement.rowIndex;
  const colIndex = cell.cellIndex;

  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      if (i === rowIndex || j === colIndex) {
        if (highlight) {
          row.cells[j].classList.add("highlight");
        } else {
          row.cells[j].classList.remove("highlight");
        }
      }
    }
  }
}

createTable();
addTableListeners();
