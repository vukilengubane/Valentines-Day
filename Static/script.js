const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const heart = document.getElementById('heart');
const text = document.getElementById('valentine-text');
const buttonContainer = document.getElementById('button-container');
const thankyou = document.getElementById('thankyou');

// No button prank effect: jumps anywhere on screen with bounce
noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + 'px';
  noBtn.style.top = Math.random() * maxY + 'px';

  // Add bounce animation
  noBtn.classList.add('no-bounce');
  noBtn.addEventListener('animationend', () => {
    noBtn.classList.remove('no-bounce');
  }, { once: true });
});

// Confetti generator
function spawnConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.left = (Math.random() * window.innerWidth) + "px";
  confetti.style.top = (Math.random() * window.innerHeight/2) + "px";
  confetti.style.backgroundColor = 
      ["red","pink","purple","white"][Math.floor(Math.random()*4)];
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 3000);
}

let confettiInterval;

// Yes button logic
yesBtn.addEventListener("click", () => {
  text.style.display = "none";
  buttonContainer.style.display = "none";
  thankyou.style.display = "block";

  // Start continuous confetti
  confettiInterval = setInterval(spawnConfetti, 100);
});