const startTimeInput = document.getElementById('start-timer');
const startButton = document.getElementById('start-button');
const timerDisplay = document.getElementById('timer-display');
let countdownInterval;
let StartTime;
startButton.addEventListener('click', () => {
    StartTime = parseInt(startTimeInput.value);
    countdownInterval = setInterval(countdown, 1000);
});
function countdown(){
    timerDisplay.textContent = StartTime;
    StartTime--;
    if (StartTime <= 0){
        clearInterval(countdownInterval);
        timerDisplay.textContent = "Time's up";
    }
}
