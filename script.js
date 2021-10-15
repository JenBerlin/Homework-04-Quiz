var startBtn = document.getElementById("start")
var timeEl = document.getElementById("time")
var gameTime = 20
var scoreEl = document.getElementById("score")
var landingPage = document.getElementById("landing-page")
var questionContainerElement = document.querySelector("#question-container")
var container1 = document.getElementById("question-container1")
var container2 = document.getElementById("question-container2")
var container3 = document.getElementById("question-container3")
var container4 = document.getElementById("question-container4")
var container5 = document.getElementById("question-container5")
var emailContainer = document.getElementById("email-container")
var scorelContainer = document.getElementById("score-container")

var timer;
var score = 0

container1.style.display = "none"
container2.style.display = "none"
container3.style.display = "none"
container4.style.display = "none"
container5.style.display = "none"
emailContainer.style.display = "none"
scorelContainer.style.display = "none"

function startTimer() {
    var count = 0;
    timer = setInterval(function() {
        count++;
        var secondsLeft = gameTime - count;
        timeEl.textContent = "Time: " + secondsLeft + " sec";

        if(count >= gameTime) {
            timeEl.textContent = "Time: " + 0;
            finishTheGame();
        }
    }, 1000)
}

function startScore() {
    var count = 0;
    timer = setInterval(function() {
        count++;
        var secondsLeft = gameTime - count;
        timeEl.textContent = "Time: " + secondsLeft + " sec";

        if(count >= gameTime) {
            timeEl.textContent = "Time: " + 0;
            finishTheGame();
        }
    }, 1000)
}

function handle1(e) {
    console.log(e.target.id)
    var answer = e.target.id
    if(answer === "a1-3"){
        score += 10
        container1.style.display = "none"
        container2.style.display = "block"
    } 
    else {
        score -= 5
        document.getElementById(answer).style.backgroundColor = "red"
    }
}
console.log(score)

function handle2(e) {
    console.log(e.target.id)
    var answer = e.target.id
    if(answer === "a2-3"){
        score += 10
        container2.style.display = "none"
        container3.style.display = "block"
    } 
    else {
        score -= 5
        document.getElementById(answer).style.backgroundColor = "red"
    }
}
console.log(score)

function handle3(e) {
    console.log(e.target.id)
    var answer = e.target.id
    if(answer === "a3-4"){
        score += 10
        container3.style.display = "none"
        container4.style.display = "block"
    } 
    else {
        score -= 5
        document.getElementById(answer).style.backgroundColor = "red"
    }
}

function handle4(e) {
    console.log(e.target.id)
    var answer = e.target.id
    if(answer === "a4-3"){
        score += 10
        container4.style.display = "none"
        emailContainer.style.display = "block"
    } 
    else {
        score -= 5
        document.getElementById(answer).style.backgroundColor = "red"
    }
}

function handle5(e) {
    console.log(e.target.id)
    var answer = e.target.id
    if(answer === "a5-4"){
        score += 10
        container5.style.display = "none"
        container5.style.display = "block"
    } 
    else {
        score -= 5
        document.getElementById(answer).style.backgroundColor = "red"
    }
}

function startQuiz() {
    startTimer()
    startScore()
    landingPage.style.display = "none"
    container1.style.display = "block"
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
console.log

