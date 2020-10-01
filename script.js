var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("startGame");

var qNa = document.getElementById("qNa");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var result = document.getElementById("result");

var finishScreen = document.getElementById("finishScreen");
var wellDoneText = document.getElementById("well-done");
var finalScore = document.getElementById("finalScore");
var enterInitials = document.getElementById("enterInitials");
var fResult = document.getElementById("fResult");

var submitBtn = document.createElement("button");
var textInput = document.createElement("input");

var scoresHeader = document.getElementById("scoreHead");
var theScores = document.getElementById("scores");

var highScoreBtn = document.getElementById("topScoreBtn");

var timeLeft = 75;

var currentStage = 0;
var stages = [
    {
        question: ["Commonly used data types DO NOT include:"],
        answers: ["strings", "booleans", "alerts", "numbers"],
    },
    {
        question: ["The condition in an if/else statement is enclosed within ______.",],
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    },
    {
        question: ["Arrays in JavaScript can be used to store ______."],
        answers: ["numbers and strings","other arrays","booleans","all of the above",],
    },
    {
        question: ["String values must be enclosed within _____ when being assigned to variables.",],
        answers: ["commas", "curly brackets", "parenthesis", "quotes"],
    },
    {
        question: ["A very useful tool used during development and debugging for printing content to the debugger is:",],
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    },
    {
        question: [],
        answers: [],
    },
];
function renderAnswers(array) {
    for (var i = 0; i < array.length; i++) {
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-info");
        button.textContent = array[i];
        button.setAttribute("data-value", array[i]);
        answers.appendChild(button);
    }
}
function renderQuestion(array) {
    for (var i = 0; i < array.length; i++) {
        var questionOnDisplay = document.createElement("h1");
        questionOnDisplay.textContent = array[i];
        questionOnDisplay.setAttribute("data-value", array[i]);
        question.append(questionOnDisplay);
    }
}
function renderEnd() {
    var wellDone = document.createElement("h1");
    wellDone.textContent = "Well done!";
    wellDoneText.append(wellDone);

    var theFinalScore = document.createElement("h3");
    theFinalScore.textContent = "Your final score is " + timeLeft;
    finalScore.append(theFinalScore);

    var highScore = document.createElement("h3");
    highScore.textContent = "Enter Your Initials: ";
    enterInitials.appendChild(highScore);

    
    textInput.getAttribute((type = "text"));
    textInput.getAttribute((id = "myText"));
    enterInitials.appendChild(textInput);

    submitBtn.setAttribute("class", "btn btn-info");
    submitBtn.textContent = "Submit";
    enterInitials.appendChild(submitBtn);
}
function renderScores (){
    var scoreHead = document.createElement("h1");
    scoreHead.textContent = "Highscores!";
    scoresHeader.append(scoreHead);

    var scores = document.createElement("h3");
    scores.textContent = timeLeft +" - "+ textInput.value;
    theScores.append(scores);

    var resetBtn = document.createElement("button");
    var resetBtnArea = document.getElementById("reset-btn");
    resetBtn.textContent = "Go Back";
    resetBtn.setAttribute("class", "btn btn-info");
    resetBtn.setAttribute("onclick", "history.go(0)")
    resetBtnArea.append(resetBtn);
}
answers.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        console.log("You clicked a button");
        var selectedAnswer = event.target.getAttribute("data-value");
        console.log(selectedAnswer);
        checkAnswer();
        // Checks for correct answer
        function checkAnswer(){
            if (currentStage===0 && selectedAnswer=== stages[0].answers[1]){
                console.log("correct answer");
                result.textContent = "";
                result.append("Your Choice was Correct!");
                setTimeout(function() {
                    currentStage++;
                    answers.textContent = "";
                    question.textContent = "";
                    result.textContent = "";
                    var answersToDisplay = stages[currentStage].answers;
                    var questionToDisplay = stages[currentStage].question;
                    renderAnswers(answersToDisplay);
                    renderQuestion(questionToDisplay);
                }, 1000);
            } else if (currentStage===1 && selectedAnswer=== stages[1].answers[2]){
                console.log("correct answer");
                result.textContent = "";
                result.append("Your Choice was Correct!");
                setTimeout(function() {
                    currentStage++;
                    answers.textContent = "";
                    question.textContent = "";
                    result.textContent = "";
                    var answersToDisplay = stages[currentStage].answers;
                    var questionToDisplay = stages[currentStage].question;
                    renderAnswers(answersToDisplay);
                    renderQuestion(questionToDisplay);
                }, 1000);
            } else if (currentStage===2 && selectedAnswer=== stages[2].answers[3]){
                console.log("correct answer");
                result.textContent = "";
                result.append("Your Choice was Correct!");
                setTimeout(function() {
                    currentStage++;
                    answers.textContent = "";
                    question.textContent = "";
                    result.textContent = "";
                    var answersToDisplay = stages[currentStage].answers;
                    var questionToDisplay = stages[currentStage].question;
                    renderAnswers(answersToDisplay);
                    renderQuestion(questionToDisplay);
                }, 1000);
            } else if (currentStage===3 && selectedAnswer=== stages[3].answers[1]){
                console.log("correct answer");
                result.textContent = "";
                result.append("Your Choice was Correct!");
                setTimeout(function() {
                    currentStage++;
                    answers.textContent = "";
                    question.textContent = "";
                    result.textContent = "";
                    var answersToDisplay = stages[currentStage].answers;
                    var questionToDisplay = stages[currentStage].question;
                    renderAnswers(answersToDisplay);
                    renderQuestion(questionToDisplay);
                }, 1000);
            } else if (currentStage===4 && selectedAnswer=== stages[4].answers[3]){
                console.log("correct answer");
                result.textContent = "";
                result.append("Your Choice was Correct!");
                setTimeout(function() {
                    currentStage++;
                    answers.textContent = "";
                    question.textContent = "";
                    result.textContent = "";
                    var answersToDisplay = stages[currentStage].answers;
                    var questionToDisplay = stages[currentStage].question;
                    renderAnswers(answersToDisplay);
                    renderQuestion(questionToDisplay);
                }, 1000);
            } else if (currentStage === stages.length - 1){
                qNa.style.display = "none";
                fResult.textContent = "Good Job!";
            }else {
                result.textContent = "";
                result.append("Your Choice was Wrong! Try again");
                timeLeft=timeLeft---15;
            }
        }
    }
});
startButton.addEventListener("click", function () {
    welcomeContainer.style.display = "none";
    var answersToDisplay = stages[currentStage].answers;
    var questionToDisplay = stages[currentStage].question;
    renderAnswers(answersToDisplay);
    renderQuestion(questionToDisplay);

    var timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (currentStage === stages.length - 1 || timeLeft <= 0) {
            qNa.style.display = "none";
            clearInterval(timer);
            renderEnd();
        }
    }, 1000);
});
submitBtn.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        console.log("You clicked a button");
        console.log(textInput.value);
        
        qNa.style.display = "none";
        finishScreen.style.display = "none";

        renderScores();
    }
})
highScoreBtn.addEventListener("click", function(){
    welcomeContainer.style.display = "none";
    renderScores();
})
