const canvas = document.querySelector("tbody");
for (let i = 0; i < 18; i++) {
  const row = canvas.insertRow();
  for (let j = 0; j < 18; j++) {
    const cell = row.insertCell();
    cell.id = `${i}-${j}`;
  }
}

let snake_head = [0, 1]; // row, column for right & down
// let snake_head = [17, 17]; // row, column for left & up
let snake_length = 2;
let snake_tail = [0, 0]; // row, column for right & down
// let snake_tail = [17, 17]; // row, column for left & up
let snake_breakpoints = [];
let snake_direction = "right";

// snake initial position
document.getElementById("0-0").className = "snake";
document.getElementById("0-1").className = "snake";

// snake_motion
const row_array = Array.from(canvas.children);

let current_row = 0; // for right & down motion
// let current_row = 17; // for left & up motion
const timer = setInterval(() => {
  let columns_cells = row_array[current_row].children;
  columns_cells = Array.from(columns_cells);

  // right motion
  /* snake_head[1]++;
  columns_cells[snake_head[1]].classList.toggle("snake");

  console.log("snake_head", snake_head, "snake_tail", snake_tail);
  if (snake_head[1] - snake_tail[1] == snake_length) {
    columns_cells[snake_tail[1]].classList.toggle("snake");
    snake_tail[1]++;
    console.log("nice");
  } */

  // left motion
  columns_cells[snake_head[1]].classList.toggle("snake");
  snake_head[1]--;

  if (Math.abs(snake_head[1] - snake_tail[1]) == snake_length + 1) {
    columns_cells[snake_tail[1]].classList.toggle("snake");
    snake_tail[1]--;
  }

  // down motion
  /* columns_cells[0].classList.toggle("snake");

  if (snake_head[0] - snake_tail[0] == snake_length) {
    let columns_cells = row_array[snake_head[0] - snake_length].children;
    columns_cells = Array.from(columns_cells);
    columns_cells[snake_tail[1]].classList.toggle("snake");
    snake_tail[0]++;
  }

  snake_head[0]++;
  current_row++; */

  // up motion
  /* columns_cells[17].classList.toggle("snake");

  if (Math.abs(snake_head[0] - snake_tail[0]) == snake_length) {
    let columns_cells = row_array[snake_head[0] + snake_length].children;
    columns_cells = Array.from(columns_cells);
    columns_cells[snake_tail[1]].classList.toggle("snake");
    console.log(columns_cells[snake_tail[1]]);

    snake_tail[0]--;
  }

  snake_head[0]--;
  current_raw--; */

  if (snake_head[0] == 17 || snake_head[1] == 17) clearInterval(timer); // for right & down motion

  // if (snake_head[0] == -1 || snake_head[1] == -1) clearInterval(timer); // for left & up motion
}, 500);

/* document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    setInterval(() => {}, interval);
  }
  if (event.key === "ArrowLeft") {
  }
  if (event.key === "ArrowUp") {
  }
  if (event.key === "ArrowDown") {
  }
}); */
