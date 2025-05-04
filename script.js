const tapBtn = document.getElementById("tapBtn");
const scoreDisplay = document.getElementById("scoreDisplay");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");
const instructions = document.getElementById("instructions");
const shareLink = document.getElementById("shareLink");

let score = 0;
let timeLeft = 5;
let gameActive = false;
let countdown;

tapBtn.addEventListener("click", () => {
  if (!gameActive) {
    startGame();
  }
  if (gameActive) {
    score++;
  }
});

restartBtn.addEventListener("click", resetGame);

function startGame() {
  gameActive = true;
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

  scoreEl.textContent = score;
  scoreDisplay.classList.remove("hidden");
  instructions.textContent = `You tapped ${score} times in 5 seconds!`;

  // Update share link with live score
  const tweetText = encodeURIComponent(`I just tapped ${score} times in 5 seconds! Can you beat me? #TapSpeedChallenge`);
  shareLink.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
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
