// script.js
const board = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");

const BOARD_SIZE = 20;
const SPEED = 150; // Snake movement speed in ms
let snake = [{ x: 10, y: 10 }]; // Snake starts in the middle
let direction = { x: 0, y: 0 }; // Current direction
let food = { x: 5, y: 5 }; // Initial food position
let score = 0;
let gameInterval;

// Initialize the game
function startGame() {
  score = 0;
  snake = [{ x: 10, y: 10 }];
  direction = { x: 1, y: 0 }; // Snake moves right by default
  food = randomFoodPosition();
  scoreDisplay.textContent = `Score: ${score}`;
  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(updateGame, SPEED);
}

// Update the game state
function updateGame() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  // Check collisions with walls or itself
  if (isCollision(head)) {
    alert("Game Over! Your final score: " + score);
    startGame();
    return;
  }

  // Add new head to the snake
  snake.unshift(head);

  // Check if the snake eats food
  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    food = randomFoodPosition();
  } else {
    // Remove the tail to keep the snake the same length
    snake.pop();
  }

  drawGame();
}

// Draw the game (snake and food)
function drawGame() {
  board.innerHTML = "";

  // Draw the snake
  snake.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    board.appendChild(snakeElement);
  });

  // Draw the food
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Check if the head collides with the wall or itself
function isCollision(head) {
  return (
    head.x < 1 ||
    head.x > BOARD_SIZE ||
    head.y < 1 ||
    head.y > BOARD_SIZE ||
    (snake.length > 1 &&
      snake.some((segment) => segment.x === head.x && segment.y === head.y))
  );
}

// Generate a random food position
function randomFoodPosition() {
  let newFoodPosition;
  while (!newFoodPosition || isFoodOnSnake(newFoodPosition)) {
    newFoodPosition = {
      x: Math.floor(Math.random() * BOARD_SIZE) + 1,
      y: Math.floor(Math.random() * BOARD_SIZE) + 1,
    };
  }
  return newFoodPosition;
}

// Check if the food is on the snake
function isFoodOnSnake(position) {
  return snake.some(
    (segment) => segment.x === position.x && segment.y === position.y
  );
}

// Handle keyboard input
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (direction.y !== 1) direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (direction.y !== -1) direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (direction.x !== 1) direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (direction.x !== -1) direction = { x: 1, y: 0 };
      break;
  }
});

// Start the game
startGame();
