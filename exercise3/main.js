const btnStartPause = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const stopWatchDisplay = document.querySelector(".time div");

let time = 0;
let intervalIx;

const stopWatch = () => {
  if (btnStartPause.textContent === "Start") {
    btnStartPause.textContent = "Pause";
    intervalIndex = setInterval(startTime, 10);
  } else if (btnStartPause.textContent === "Pause") {
    btnStartPause.textContent = "Start";
    clearInterval(intervalIndex);
  }
};

const startTime = () => {
  time++;
  stopWatchDisplay.textContent = (time / 100).toFixed(2);
};

const resetTime = () => {
  time = 0;
  stopWatchDisplay.textContent = "---";
  btnStartPause.textContent = "Start";
  clearInterval(intervalIndex);
};

btnStartPause.addEventListener("click", stopWatch);
btnReset.addEventListener("click", resetTime);
