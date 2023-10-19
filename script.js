let score = 0;
let timeLeft = 60;
let gameTimer;
let isGameRunning = false;
let moleSpeed = 1300; // Initial speed (1.3seconds)
const maxMoleSpeed = 300; // Fastest speed (0.3 seconds)
const speedDecreaseInterval = 11; // Decrease speed every 11 seconds
const speedDecreaseAmount = 200; // Speed decreases by 200 milliseconds

document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("end-button").addEventListener("click", endGame);

function startGame() {
  if (!isGameRunning) {
    isGameRunning = true;
    document.getElementById("start-button").disabled = true;
    document.getElementById("end-button").style.display = "block";

    gameTimer = setInterval(updateTimer, 1000);
    gameLoop();

    decreaseMoleSpeed();
  }
}

function updateTimer() {
  timeLeft--;
  document.getElementById("timer").textContent =
    "Time: " + timeLeft + " seconds";

  if (timeLeft <= 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(gameTimer);
  isGameRunning = false;
  document.getElementById("start-button").disabled = false;
  document.getElementById("end-button").style.display = "none";

  document.getElementById("score").textContent = "Score: " + score;

  alert("Game over! Final score is " + score);

  score = 0;
  timeLeft = 60;
  document.getElementById("timer").textContent =
    "Time: " + timeLeft + " seconds";
}

function createRandomTarget() {
  const targets = ["mole", "carrot", "potato"];
  const randomIndex = Math.floor(Math.random() * targets.length);
  return targets[randomIndex];
}

function createRandomHoles() {
  const moleHoles = document.querySelectorAll(".hole");
  moleHoles.forEach((hole) => {
    hole.textContent = "";

    const target = createRandomTarget();
    const targetImage = document.createElement("img");

    switch (target) {
      case "mole":
        targetImage.src = "mole.png/mole.png";
        break;
      case "potato":
        targetImage.src = "potato/potato (1).png";
        break;
      case "carrot":
        targetImage.src = "carrot/carrot.png";
        break;
    }

    targetImage.alt = target;
    targetImage.classList.add(target);
    hole.appendChild(targetImage);

    hole.addEventListener("click", whackTarget);
  });
}

function gameLoop() {
  createRandomHoles();
  setTimeout(hideTargets, moleSpeed);
}

function hideTargets() {
  const targets = document.querySelectorAll("img.mole, img.carrot, img.potato");
  targets.forEach((target) => {
    target.style.visibility = "hidden";
  });
  setTimeout(gameLoop, moleSpeed);
}

function whackTarget(event) {
  if (isGameRunning) {
    const content = event.target.classList;
    if (
      content.contains("mole") ||
      content.contains("carrot") ||
      content.contains("potato")
    ) {
      event.target.style.visibility = "hidden";
      if (content.contains("mole")) {
        score += 5;
      }
      document.getElementById("score").textContent = "Score: " + score;
    }
  }
}

function decreaseMoleSpeed() {
  if (moleSpeed > maxMoleSpeed) {
    moleSpeed -= speedDecreaseAmount;
    setTimeout(decreaseMoleSpeed, speedDecreaseInterval * 1000);
  }
}

document.getElementById("end-button").style.display = "block";
