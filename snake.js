const board = document.getElementById("snakeBox");
const ctx = board.getContext("2d");
const startText = document.getElementById("start");
const logo = document.querySelector("#logo")

function startGame() {
  let gameStart = true;
  document.addEventListener("keydown", pressKey)
  setInterval(game, 1000 / 15); //milliseconds per framerate(15);
  startText.style.display = "none";
  logo.style.display = "none";
}
