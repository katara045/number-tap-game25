let game = document.getElementById("game");
let currentSpan = document.getElementById("current");
let timeSpan = document.getElementById("time");
let restartBtn = document.getElementById("restartBtn");

function initGame() {
  game.innerHTML = "";
  currentSpan.textContent = "1";
  timeSpan.textContent = "0.00";
  restartBtn.style.display = "none";

  let numbers = [];
  for (let i = 1; i <= 25; i++) numbers.push(i);
  numbers.sort(() => Math.random() - 0.5);

  let current = 1;
  let startTime;
  let timer;

  numbers.forEach(n => {
    const btn = document.createElement("button");
    btn.textContent = n;
    btn.onclick = () => {
      if (n === current) {
        if (current === 1) {
          startTime = Date.now();
          timer = setInterval(() => {
            let diff = (Date.now() - startTime) / 1000;
            timeSpan.textContent = diff.toFixed(2);
          }, 10);
        }
        btn.disabled = true;
        current++;
        currentSpan.textContent = current;
        if (current > 25) {
          clearInterval(timer);
          restartBtn.style.display = "inline";
          alert("🎉 완료! 기록: " + timeSpan.textContent + "초");
        }
      }
    };
    game.appendChild(btn);
  });

  restartBtn.onclick = initGame;
}

initGame();
