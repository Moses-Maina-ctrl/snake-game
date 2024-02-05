const board = document.getElementById("snakeBox");
const ctx = board.getContext("2d");
const startText = document.getElementById("start");
const logo = document.querySelector("#logo")
const scoreBoard = document.getElementById("score")
const highScoreBoard = document.getElementById("highScore");


let xPlayerPosition = 10, yPlayerPosition = 10;
let xApplePosition = 15, yApplePosition = 15;
let gridSize = Math.sqrt(board.width), tileCount = Math.sqrt(board.width);
let x_dir = 0, y_dir = 0;
let gameStart = false
let trail = [];
let tail = 5;
let score = 0;
let highScore = 0;
document.addEventListener("keydown", pressKey)

function startGame() {
  gameStart = true;
  startText.style.display = "none";
  logo.style.display = "none";
  setInterval(game, 1000 / 15); //milliseconds per framerate(15);
}
function game() {
  xPlayerPosition += x_dir;
  yPlayerPosition += y_dir;

  if (xPlayerPosition < 0) {
    xPlayerPosition = tileCount - 1;
  }
  if (xPlayerPosition > tileCount - 1) {
    xPlayerPosition = 0;
  }
  if (yPlayerPosition > tileCount - 1) {
    yPlayerPosition = 0;
  }
  if (yPlayerPosition < 0) {
    yPlayerPosition = tileCount - 1;
  }
  ctx.fillStyle = "#1E1E1E";
  ctx.fillRect(0, 0, board.width, board.height);

  ctx.fillStyle = "white";
  for (let i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);
    if (xPlayerPosition == trail[i].x && yPlayerPosition == trail[i].y) {
      tail = 5;
      highScore = score;
      highScoreBoard.innerText = highScore.toString().padStart(3, '0')
      score = 0;
      scoreBoard.innerText = "000"
    }
  }
  trail.push({ x: xPlayerPosition, y: yPlayerPosition });
  maintainLength(trail, tail);

  if (xPlayerPosition == xApplePosition && yPlayerPosition == yApplePosition) {
    tail++;
    score += 1;
    scoreBoard.innerText = score.toString().padStart(3, '0');
    xApplePosition = Math.floor(Math.random() * tileCount);
    yApplePosition = Math.floor(Math.random() * tileCount);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(xApplePosition * gridSize, yApplePosition * gridSize, gridSize - 2, gridSize - 2)
}
function pressKey(event) {
  if (!gameStart && event.keyCode === 32) {
    startGame();
  } else {
    switch (true) {
      case (event.keyCode === 37 && x_dir === 0):
        x_dir = -1; y_dir = 0;
        break;
      case (event.keyCode === 38 && y_dir === 0):
        x_dir = 0; y_dir = -1;
        break;
      case (event.keyCode === 39 && x_dir === 0):
        x_dir = 1; y_dir = 0;
        break;
      case (event.keyCode === 40 && y_dir === 0):
        x_dir = 0; y_dir = 1;
        break;
    }
  }
}

function changeWidth() {
  if (window.innerWidth < 500) {
    board.width = 256;
    board.height = 256;
  } else {
    board.width = 400;
  }
}
function maintainLength(trail, tail) {
  while (trail.length > tail) {
    trail.shift();
  }
}
changeWidth();
