// DOM elements
const tapBtn = document.getElementById("tapBtn");
const scoreDisplay = document.getElementById("scoreDisplay");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");
const instructions = document.getElementById("instructions");

// Global game variables
let score = 0;
let timeLeft = 5; // 5 seconds
let gameActive = false;
let countdown;

// Start game on first tap
tapBtn.addEventListener("click", () => {
  if (!gameActive) {
    startGame();
  }
  if (gameActive) {
    score++;
  }
});

// Restart game
restartBtn.addEventListener("click", () => {
  resetGame();
});

function startGame() {
  gameActive = true;
  // Start the countdown
  countdown = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  gameActive = false;
  clearInterval(countdown);
  tapBtn.disabled = true;
  tapBtn.style.backgroundColor = "#ccc";
  
  // Reveal score
  scoreEl.textContent = score;
  scoreDisplay.classList.remove("hidden");
  
  instructions.textContent = `You tapped ${score} times in 5 seconds!`;
}

function resetGame() {
  score = 0;
  timeLeft = 5;
  gameActive = false;
  tapBtn.disabled = false;
  tapBtn.style.backgroundColor = "#ff4081";
  scoreDisplay.classList.add("hidden");
  instructions.textContent = "Tap the button as many times as you can in 5 seconds!";
}
