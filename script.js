var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("startGame");

var qNa = document.getElementById("qNa");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var result = document.getElementById("result");

var finishScreen = document.getElementById("finishScreen");
var finalScore = document.getElementById("finalScore");
var enterInitials = document.getElementById("enterInitials");
var fResult = document.getElementById("fResult");

var timeLeft = 75;

var currentStage = 0;
var stages = [
    {
        question: ["Commonly used data types DO NOT include:"],
        answers: ["strings", "C booleans", "alerts", "numbers"],
    },
    {
        question: ["The condition in an if/else statement is enclosed within ______.",],
        answers: ["quotes", "curly brackets", "C parenthesis", "square brackets"],
    },
    {
        question: ["Arrays in JavaScript can be used to store ______."],
        answers: ["numbers and strings","other arrays","booleans","C all of the above",],
    },
    {
        question: ["String values must be enclosed within _____ when being assigned to variables.",],
        answers: ["commas", "C curly brackets", "parenthesis", "quotes"],
    },
    {
        question: ["A very useful tool used during development and debugging for printing content to the debugger is:",],
        answers: ["JavaScript", "terminal/bash", "for loops", "C console.log"],
    },
    {
        question: ["All done!"],
        answers: [],
    },
];

function renderAnswers(array) {
    for (var i = 0; i < array.length; i++) {
        // 1. Create an element.
        var button = document.createElement("button");
        // 2. Add content
        button.setAttribute("class", "btn btn-info");
        button.textContent = array[i];
        button.setAttribute("data-value", array[i]);
        // 3. Append to an existing element
        answers.appendChild(button);
    }
}
function renderQuestion(array) {
    for (var i = 0; i < array.length; i++) {
        // 1. Create an element.
        var questionOnDisplay = document.createElement("h1");
        // 2. Add content
        questionOnDisplay.textContent = array[i];
        questionOnDisplay.setAttribute("data-value", array[i]);
        // 3. Append to an existing element
        question.append(questionOnDisplay);
    }
}
function renderEnd() {
    // 1. Create an element.
    var theFinalScore = document.createElement("h3");
    // 2. Add content
    theFinalScore.textContent = "Your final score is " + timeLeft;
    // 3. Append to an existing element
    finalScore.append(theFinalScore);

    var highScore = document.createElement("h3");
    highScore.textContent = "Enter Your Initials: ";
    enterInitials.appendChild(highScore);

    var textInput = document.createElement("input");
    textInput.getAttribute((type = "text"));
    textInput.getAttribute((id = "myText"));
    enterInitials.appendChild(textInput);

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "btn btn-info");
    submitBtn.textContent = "Submit";
    enterInitials.appendChild(submitBtn);
}

answers.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        console.log("You clicked a button");
        var selectedAnswer = event.target.getAttribute("data-value");
        console.log(selectedAnswer);

        result.textContent = "";
        var answerToDisplay = document.createElement("h3");
        answerToDisplay.textContent = selectedAnswer;
        result.append("Your Choice was " + selectedAnswer);

        // TODO: Save to Local Storage

        if (currentStage === stages.length - 1) {
            qNa.style.display = "none";
            fResult.textContent = "Good Job!";
        } else {
            setTimeout(function () {
                currentStage++;
                answers.textContent = "";
                question.textContent = "";
                result.textContent = "";
                var answersToDisplay = stages[currentStage].answers;
                var questionToDisplay = stages[currentStage].question;
                renderAnswers(answersToDisplay);
                renderQuestion(questionToDisplay);
            }, 1000);
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
        if (currentStage === stages.length - 1) {
            clearInterval(timer);
            renderEnd();
        }
    }, 1000);
});
