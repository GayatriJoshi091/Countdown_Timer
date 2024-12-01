let countdown;
let timeLeft;
let isRunning = false;

function startTimer() {
    if (isRunning) return; // Don't start a new timer if one is already running

    let minutes = parseInt(document.getElementById('minutes').value) || 0;
    let seconds = parseInt(document.getElementById('seconds').value) || 0;

    timeLeft = minutes * 60 + seconds;
    isRunning = true;

    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            isRunning = false;
            return;
        }

        timeLeft--;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeLeft = 0;
    updateDisplay();
}

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById('timerDisplay').textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
