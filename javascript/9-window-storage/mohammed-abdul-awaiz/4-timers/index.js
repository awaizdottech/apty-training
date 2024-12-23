let countdownInterval;
function startCountdown() {
  const input = document.getElementById("countdownInput").value;
  let timeRemaining = parseInt(input, 10);
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("please enter a valid number of seconds.");
    return;
  }

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    if (timeRemaining > 0) {
      document.getElementById(
        "countdownDisplay"
      ).textContent = `time Remaining: ${timeRemaining} seconds`;
      timeRemaining--;
    } else {
      clearInterval(countdownInterval);
      document.getElementById("countdownDisplay").textContent = "time is up!";
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdownInterval);
  document.getElementById("countdownDisplay").textContent = "time Remaining: -";
  document.getElementById("countdownInput").value = "";
}

let stopwatchInterval;
let elapsedTime = 0;
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function startStopwatch() {
  if (stopwatchInterval) return;

  stopwatchInterval = setInterval(() => {
    elapsedTime++;
    document.getElementById(
      "stopwatchDisplay"
    ).textContent = `elapsed Time: ${formatTime(elapsedTime)}`;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  document.getElementById("stopwatchDisplay").textContent =
    "elapsed Time: 0:00";
}
