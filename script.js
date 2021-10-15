var startBtn = document.querySelector("#start");
var timeEl = document.querySelector(".time")
var gameTime = 10
var questionContainerElement = document.querySelector("#question-container")

var timer;

function startQuiz() {
    

}



function startTimer() {
    var count = 0;
    timer = setInterval(function() {
        count++;
        var secondsLeft = gameTime - count;
        timeEl.textContent = "Time: " + secondsLeft;

        if(count >= gameTime) {
            finishTheGame();
        }
    }, 2000)
}

function finishTheGame() {
    clearInterval(timer);
    // if all questions are correct
        // all correct needs to be a function
    // + update Score 
}

function sendMessage() {
    timeEl.textContent = "Game over"
}

startBtn.addEventListener("click", startQuiz);

