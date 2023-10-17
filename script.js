//declare variables
const startButton = document.getElementById("start-button");
const endButton = document.getElementById("end-button");
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const potatoes = document.querySelectorAll(".potato");
const carrots = document.querySelectorAll(".carrot");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
let score = 0;
let time = 30;

// const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

function startGame() {
  //start the game by starting the timer
  startTimer();
  score = 0;
  scoreDisplay.textContent = "Score: " + score;

  gameLoop(); //this is telling the computer to start the game
}

function gameLoop() {
  updateGameElements();
  // Update vegetables
  //update moles
  // Update timer

  // Update score

  // Other game logic

  requestAnimationFrame(gameLoop); // Continue the loop
}
function updateGameElements() {
  moles.forEach(function (mole) {
    if (Math.random() < molesAppearanceProbability) {
      mole.style.display = "block"; // Show the mole
    } else {
      mole.style.display = "none"; // Hide the mole
    }
  });

  potatoes.forEach(function (potato) {
    if (Math.random() < potatoesAppearanceProbability) {
      potato.style.display = "block";
    } else {
      potato.style.display = "none";
    }
  });
  carrots.forEach(function (carrot) {
    if (Math.random() < carrotsAppearanceProbability) {
      carrot.style.display = "block";
    } else {
      carrot.style.display = "none";
    }
  });
}
const molesAppearanceProbability = 0.3;
const potatosAppearanceProbability = 0.3;
const carrotsAppearanceProbability = 0.4;
