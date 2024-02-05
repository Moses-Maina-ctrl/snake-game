const board = document.getElementById("snakeBox");
const ctx = board.getContext("2d");
const startText = document.getElementById("start");
const logo = document.querySelector("#logo")

let xPlayerPosition = 10, yPlayerPosition = 10;
let gridSize = 20; tileCount = 20;
let x_dir = 0, y_dir = 0;
let gameStart = false
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
}
function pressKey(event) {
  if (!gameStart && event.keyCode === 32) {
    startGame();
    console.log("Space")
  } else {
    switch (event.keyCode) {
      case 37:
        x_dir = -1; y_dir = 0;
        console.log("right")
        break;
      case 38:
        x_dir = 0; y_dir = 1;
        break;
      case 39:
        x_dir = -1; y_dir = 0;
        break;
      case 40:
        x_dir = 0; y_dir = -1;
        break;





    }
  }
}
