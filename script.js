var startBtn = document.getElementById("start")
var timeEl = document.getElementById("time")
var gameTime = 60
var scoreEl = document.getElementById("score")
var landingPage = document.getElementById("landing-page")
var questionsEl = document.querySelector("#questions")
var container1 = document.getElementById("question-container1")
var container2 = document.getElementById("question-container2")
var container3 = document.getElementById("question-container3")
var container4 = document.getElementById("question-container4")
var container5 = document.getElementById("question-container5")
var initialsContainer = document.getElementById("initials-container")
var finalContainer = document.getElementById("final-container")
var InitialsSpan = document.getElementById("initials-input")
var formElementButton = document.getElementById("form-initials")
var initials = document.getElementById("initials")
var showScore = document.getElementById("show-score")
var initialsInput = document.getElementById("initials-input")
var countInput = document.getElementById("count-input")

var timer;
var count = 0
var score = 0

container1.style.display = "none"
container2.style.display = "none"
container3.style.display = "none"
container4.style.display = "none"
container5.style.display = "none"
initialsContainer.style.display = "none"
finalContainer.style.display = "none"

function startTimer() {
    count = 0;
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

function updateScore() {
    scoreEl.textContent = "Score: " + score;
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
        count += 10
        document.getElementById(answer).style.backgroundColor = "red"
    }
    updateScore()
}

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
        count += 10
        document.getElementById(answer).style.backgroundColor = "red"
    }
    updateScore()
}

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
        count += 10
        document.getElementById(answer).style.backgroundColor = "red"
    }
    updateScore()
}

function handle4(e) {
    console.log(e.target.id)
    var answer = e.target.id
    if(answer === "a4-3"){
        score += 10
        container4.style.display = "none"
        container5.style.display = "block"
    } 
    else {
        score -= 5
        count += 10
        document.getElementById(answer).style.backgroundColor = "red"
    }
    updateScore()
}

function handle5(e) {
    console.log(e.target.id)
    var answer = e.target.id
    if(answer === "a5-4"){
        score += 10
    }
    else {
        score -= 5
        count += 10
        document.getElementById(answer).style.backgroundColor = "red"
    }
    updateScore()
    finishTheGame()
}

function startQuiz() {
    startTimer()
    landingPage.style.display = "none"
    container1.style.display = "block"
}

function finishTheGame() {
    clearInterval(timer);
    questionsEl.style.display = "none"
    initialsContainer.style.display = "block"
    showScore.textContent = score
}

function handleSubmit(event) {
    event.preventDefault();
    initialsContainer.style.display = "none"
    finalContainer.style.display = "block"

const allScores = JSON.parse(localStorage.getItem("scores"))||[];

const input = initials.value;
console.log(allScores)

newScore = {
    [input]: score
}

allScores.push(newScore)

localStorage.setItem("scores", JSON.stringify(allScores)
);

var largest = null;

for (i=0; i<=largest;i++){
    if (allScores[i]>largest) {
        var largest=allScores[i];
    }
}
console.log(largest);

}

formElementButton.addEventListener("submit", handleSubmit)

submit.addEventListener("click", function() {
    if(initials){
    initialsInput.textContent = initials;
    }
});

startBtn.addEventListener("click", startQuiz);