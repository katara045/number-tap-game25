let numbers = [];
for (let i = 1; i <= 25; i++) numbers.push(i);
numbers.sort(() => Math.random() - 0.5);

let current = 1;
let startTime;
let timer;

const game = document.getElementById("game");
const currentSpan = document.getElementById("current");
const timeSpan = document.getElementById("time");

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
        alert("🎉 완료! 기록: " + timeSpan.textContent + "초");
      }
    }
  };
  game.appendChild(btn);
});
