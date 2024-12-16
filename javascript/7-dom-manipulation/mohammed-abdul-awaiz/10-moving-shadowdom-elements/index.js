function initializeTable() {
  const shadow_host = document.getElementById("shadow-host");
  const shadow_root = shadow_host.attachShadow({ mode: "open" });
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const shadowdom_styles = document.createElement("style");
  th1.innerHTML = "#";
  th2.innerHTML = "row content";
  th3.innerHTML = "actions";
  shadowdom_styles.textContent = `button {
  margin: 8px;
  border-radius: 15px;
  background-color: aqua;
  padding: 5px 15px;
}
  body{color:whitesmoke}`;
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);
  table.appendChild(thead);
  shadow_root.appendChild(table);
  shadow_root.appendChild(shadowdom_styles);

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${i}</td>
                    <td>Row ${i}</td>
                    <td>
                        <button onclick="moveUp(this)">Up</button>
                        <button onclick="moveDown(this)">Down</button>
                        <button onclick="moveToTop(this)">Top</button>
                        <button onclick="moveToBottom(this)">Bottom</button>
                    </td>
                `;
    table.appendChild(row);
  }
}

function moveUp(button) {
  const row = button.closest("tr");
  const prevRow = row.previousElementSibling;
  if (prevRow && prevRow.tagName === "TR") {
    row.parentNode.insertBefore(row, prevRow);
  }
}

function moveDown(button) {
  const row = button.closest("tr");
  const nextRow = row.nextElementSibling;
  if (nextRow) {
    row.parentNode.insertBefore(nextRow, row);
  }
}

function moveToTop(button) {
  const row = button.closest("tr");
  const tableBody = row.parentNode;
  tableBody.insertBefore(row, tableBody.firstElementChild);
}

function moveToBottom(button) {
  const row = button.closest("tr");
  const tableBody = row.parentNode;
  tableBody.appendChild(row);
}

window.onload = initializeTable;
