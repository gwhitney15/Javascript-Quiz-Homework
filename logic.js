var timerEl = document.querySelector("#time")
var startBtn = document.querySelector("#startBtn")
var startScreen = document.querySelector("#container")
var startEl = document.querySelector("#quizStart")
var questions = document.querySelector("#questions-container")
var answersEl = document.querySelector("#answers")
var scores = document.querySelector("#scores")

var timer;
var currentQuestion = 0;
//displays score
function highScores() {
    questions.textContent = "High Scores " + timeLeft
    var restartGame = document.createElement("button");
    questions.appendChild(restartGame);
    restartGame.textContent = "Restart Game";
    restartGame.addEventListener("click", startQuiz);
}
scores.addEventListener("click", highScores);
document.getElementById("questions-container").style.display = "none";


var timeLeft = 75
//displays timer on screen. It will stop at zero.
function countdown() {
    timeLeft--;
    timerEl.textContent = parseInt(timeLeft);
    if (timeLeft <= 0) {
        clearInterval(timer);
        highScores()
    }



}


//counts down every second
startBtn.addEventListener("click", function count() {

    timer = setInterval(countdown, 1000);
    startQuiz()

});
//begins the quiz
function startQuiz() {
    startEl.style.display = "none";
    questions.style.display = "block";
    renderQuestions()
}
//displays the questions and hides the start screen
function renderQuestions() {
    var questionToRender = myQuestions[currentQuestion]
    questions.textContent = questionToRender.questionText
    renderAnswers()
}
//displays the answers
function renderAnswers() {
    var answersToRender = myQuestions[currentQuestion].choices
    Object.values(answersToRender).forEach(function (choice, index) {
        var choiceEl = document.createElement("button");

        questions.appendChild(choiceEl);
        choiceEl.classList.add("btn")
        choiceEl.textContent = choice;
        console.log(choice)


        choiceEl.addEventListener("click", checkQuestion)
    })

}

//checks to see if the clicked button equals the correct answer from the array
function checkQuestion(e) {
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    e.preventDefault();
    var correctAnswer = myQuestions[currentQuestion].answer
    var clickedOne = text

    if (clickedOne != correctAnswer) {
        timeLeft -= 10;
    } else {
        if (currentQuestion <= 3) {
            currentQuestion++;
            renderQuestions();
        } else {
            clearInterval(timer);
            highScores();

        }


    }



}


var myQuestions = [
    {
        questionText: "What is not a commonly used data type?",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        questionText: "Which is not used to declare a variable?",
        choices: ["let", "const", "append", "var"],
        answer: "append"
    },
    {
        questionText: "What do arrays store?",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        questionText: "Which is used when assigning a string to a variable?",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        questionText: "Which will output a message in the console?",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];