var timeEl = document.querySelector(".time")
var secondsLeft = 20

function setTime () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 2000)
}

function sendMessage() {
    timeEl.textContent = "Game over"
}
