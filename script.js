var startBtn = document.getElementById("start")
// var startAgainBtn = document.getElementById("start-again")
var timeEl = document.getElementById("time")
var gameTime = 60
var scoreEl = document.getElementById("score")
var landingPage = document.getElementById("landing-page")
// var timeOutPage = document.getElementById("timeout")
var questionsEl = document.querySelector("#questions")
var container1 = document.getElementById("question-container1")
var container2 = document.getElementById("question-container2")
var container3 = document.getElementById("question-container3")
var container4 = document.getElementById("question-container4")
var container5 = document.getElementById("question-container5")
// var showScore = document.getElementById("show-score")
var initialsContainer = document.getElementById("initials-container")
var finalContainer = document.getElementById("final-container")
var InitialsSpan = document.getElementById("initials-input")

// target form
var formElementButton = document.getElementById("form-initials")

// target form input
var initials = document.getElementById("initials")

function renderLastInitials() {
InitialsSpan.textContent = lastInitials.input
}

// on submit event handler function
function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");

// get data from local storage
const lastInitials = getDataFromLocalStorage();
console.log(lastInitials)

// get the user input value
const input = initials.value;

// show final page "get it back from hidden"

// update the data from local storage
lastInitials.initials = initials;

// set local storage with updated data
localStorage.setItem("lastInitials", JSON.stringify(lastInitials)
);

}

function getDataFromLocalStorage() {
    // get data from local storage by key name
    var data = JSON.parse(localStorage.getItem(" "));
    console.log(data)
    // if null return set local storage with default value {} return {}
    if(!data){
    localStorage.setItem("lastInitials", JSON.stringify({}));
    return{}
}
    else {
    return data;
}
}

// add event listener on form for submit event
formElementButton.addEventListener("submit", handleSubmit)

var showScore = document.getElementById("show-score")
var initialsInput = document.getElementById("initials-input")
var countInput = document.getElementById("count-input")

var timer;
var count = 0
var score = 0

// timeOutPage.style.display = "none"
container1.style.display = "none"
container2.style.display = "none"
container3.style.display = "none"
container4.style.display = "none"
container5.style.display = "none"
// initialsContainer.style.display = "none"
// finalContainer.style.display = "none"

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

submit.addEventListener("click", function() {
    if(initials){
    initialsInput.textContent = initials;
    localStorage.setItem("initials", initials)
    }
    
});

startBtn.addEventListener("click", startQuiz);
// startAgainBtn.addEventListener("click", startQuiz);
// // Why is it not working?


