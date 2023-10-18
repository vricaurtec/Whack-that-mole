// const startButton = document.getElementById("start-button");
// const endButton = document.getElementById("end-button");
// const scoreDisplay = document.getElementById("score");
// const timerDisplay = document.getElementById("timer");
// let score = 0;
// let timer = 60;
// let timerInterval;

// let moles, potatoes, carrots;

// const molesAppearanceProbability = 0.4;
// const potatoesAppearanceProbability = 0.3;
// const carrotsAppearanceProbability = 0.3;
// // Add event listener for the start button
// startButton.addEventListener("click", startGame);

// function startGame() {
//   score = 0;
//   scoreDisplay.textContent = "Score: " + score;
//   timer = 60;
//   timerDisplay.textContent = "Time: " + timer;

//   // Clear any existing intervals
//   clearInterval(timerInterval);

//   // Start the timer interval
//   timerInterval = setInterval(decreaseTimer, 1000);

//   gameLoop();
// }

// function decreaseTimer() {
//   timer--;
//   if (timer < 0) {
//     timer = 0;
//   }
//   timerDisplay.textContent = "Time: " + timer;
//   if (timer === 0) {
//     gameOver();
//   }
// }

// function gameLoop() {
//   moles = document.querySelectorAll(".mole");
//   potatoes = document.querySelectorAll(".potato");
//   carrots = document.querySelectorAll(".carrot");

//   //   updateGameElements();
//   //   requestAnimationFrame(gameLoop);

//   // function updateGameElements() {

//   moles.forEach(function (mole) {
//     mole.addEventListener("click", function () {
//       if (mole.style.display === "block") {
//         score += 5;
//         scoreDisplay.textContent = "Score: " + score;
//         mole.style.display = "none";
//       }
//     });
//   });
// }

// [potatoes, carrots].forEach(function (elements) {
//   elements.forEach(function (element) {
//     element.addEventListener("click", function () {
//       if (element.style.display === "block") {
//         timer -= 3; // Decrease the timer by 3 seconds when a potato or carrot is clicked
//         if (timer < 0) {
//           timer = 0;
//         }
//         timerDisplay.textContent = "Time: " + timer;
//         element.style.display = "none";
//       }
//     });
//   });
// });

// updateGameElements();

// if (timer === 0) {
//   gameOver();
// }
// requestAnimationFrame(gameLoop);

// function updateGameElements() {
//   moles.forEach(function (mole) {
//     if (Math.random() < molesAppearanceProbability) {
//       mole.style.display = "block"; // Show the mole
//     } else {
//       mole.style.display = "none"; // Hide the mole
//     }
//   });

//   potatoes.forEach(function (potato) {
//     if (Math.random() < potatoesAppearanceProbability) {
//       potato.style.display = "block"; // Show the potato
//     } else {
//       potato.style.display = "none"; // Hide the potato
//     }
//   });
// }

// carrots.forEach(function (carrot) {
//   if (Math.random() < carrotsAppearanceProbability) {
//     carrot.style.display = "block"; // Show the carrot
//   } else {
//     carrot.style.display = "none"; // Hide the carrot
//   }
// });

// function gameOver() {
//   alert("Game Over! Final score is " + score);
// }
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const endButton = document.getElementById("end-button");
  const scoreDisplay = document.getElementById("score");
  const timerDisplay = document.getElementById("timer");
  let score = 0;
  let timer = 60;
  let timerInterval;

  let moles, potatoes, carrots;

  const molesAppearanceProbability = 0.4;
  const potatoesAppearanceProbability = 0.3;
  const carrotsAppearanceProbability = 0.3;

  // Add event listener for the start button
  startButton.addEventListener("click", startGame);

  function startGame() {
    score = 0;
    scoreDisplay.textContent = "Score: " + score;
    timer = 60;
    timerDisplay.textContent = "Time: " + timer;

    // Clear any existing intervals
    clearInterval(timerInterval);

    // Start the timer interval
    timerInterval = setInterval(decreaseTimer, 1000);

    gameLoop();
  }

  function decreaseTimer() {
    timer--;
    if (timer < 0) {
      timer = 0;
    }
    timerDisplay.textContent = "Time: " + timer;
    if (timer === 0) {
      gameOver();
    }
  }

  function gameLoop() {
    moles = document.querySelectorAll(".mole");
    potatoes = document.querySelectorAll(".potato");
    carrots = document.querySelectorAll(".carrot");

    updateGameElements();

    // Only update the game elements if the timer is not 0
    if (timer > 0) {
      requestAnimationFrame(gameLoop);
    } else {
      gameOver();
    }
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
        potato.style.display = "block"; // Show the potato
      } else {
        potato.style.display = "none"; // Hide the potato
      }
    });

    carrots.forEach(function (carrot) {
      if (Math.random() < carrotsAppearanceProbability) {
        carrot.style.display = "block"; // Show the carrot
      } else {
        carrot.style.display = "none"; // Hide the carrot
      }
    });
  }

  [moles, potatoes, carrots].forEach(function (elements) {
    elements.forEach(function (element) {
      element.addEventListener("click", function () {
        if (element.style.display === "block") {
          if (elements === potatoes || elements === carrots) {
            timer -= 3;
            if (timer < 0) {
              timer = 0;
            }
            timerDisplay.textContent = "Time: " + timer;
          } else if (elements === moles) {
            score += 5;
            scoreDisplay.textContent = "Score: " + score;
          }
          element.style.display = "none";
        }
      });
    });
  });

  function gameOver() {
    alert("Game Over! Final score is " + score);
  }
});
