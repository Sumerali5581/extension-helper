// popup.js
let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;
let problemCount = 0;

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timer').textContent = timeString;
}

document.getElementById('start').addEventListener('click', () => {
  timerInterval = setInterval(updateTimer, 1000);
  document.getElementById('start').disabled = true;
});

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(timerInterval);
  document.getElementById('start').disabled = false;
});

document.getElementById('resetTimer').addEventListener('click', () => {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('timer').textContent = '00:00:00';
  document.getElementById('start').disabled = false;
});

document.getElementById('incrementProblem').addEventListener('click', () => {
  problemCount++;
  document.getElementById('problemCount').textContent = problemCount;
});

document.getElementById('resetProblemCounter').addEventListener('click', () => {
  problemCount = 0;
  document.getElementById('problemCount').textContent = problemCount;
});
