let countdown = 60;
const timer = document.getElementById("timer");

const timerInterval = setInterval(() => {
  countdown--;
  timer.textContent = countdown;

  if (countdown <= 0) {
    clearInterval(timerInterval);
    timer.textContent = "Ready!";
  }
}, 1000);

const joinBtn = document.getElementById("joinBtn");
let fade = true;
setInterval(() => {
  joinBtn.style.opacity = fade ? "0.7" : "1";
  fade = !fade;
}, 1000);

joinBtn.addEventListener("click", () => {
  window.open("https://t.me/+fxaW6aDtXD0zOGRl", "_blank");
});
