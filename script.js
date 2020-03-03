// QUESTIONS ARRAY
var questions = [
    {
        question: "How is a class referenced in CSS?",
        answers: ["Using the # symbol", "Using the . symbol", "Using the $ symbol"],
        correctAns: 0
    },
    {
        question: "What is a NaN?",
        answers: ["zero", "Not a Number", "-1"],
        correctAns: 1
    }
];
var currentQuestion = 0;

// VARIABLES
var cardBodyBtnHolder = document.querySelector(".card-body");



// START BUTTON
var startContainer = document.getElementById("startBtn");
// var startElement = document.createElement("div");
// var cardHeader = document.createElement("div");

// CLICK EVENT
startContainer.addEventListener("click", startquiz);

//MAIN FUNCTION
function startquiz () {
    startBtn.remove()
// CREATE NEXT BUTTON
    var nextBtn = document.createElement("button");
    cardBodyBtnHolder.appendChild(nextBtn);
    cardBodyBtnHolder.textContent= "Next";


    // TIMER FXN
    var timeEl = document.querySelector(".time");
    //var mainEl = document.getElementById("main");
    var secondsLeft = 10;

    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage();
            }
        }, 1000);
    }

    function sendMessage() {
        timeEl.textContent = "Time Ran Out ";
        //var timeOutEl = document.createElement("timeout"); 
        //mainEl.appendChild(timeOutEl);
    }
    setTime();


//QUESTION & ANSWERS
function generateQuestion(questionNumber) {
    // gernerate question element
    var questionsContainer = document.getElementById("question");
    var questionElement = document.createElement("div");
    var cardHeader = document.createElement("div");
    // generate question
    cardHeader.className = "card-header";
    cardHeader.textContent = questions[questionNumber].question;
    questionElement.appendChild(cardHeader);
    questionElement.className = "card";

    //generate answers
    var answers = document.createElement("div");
    answers.className = "card-body";

    // attach click event
    answers.addEventListener("click", function (e) {
        // PSEUDOCODE 
        // if user picks correct answer
        
            // return message "Correct Answer"
        
            // if user picks incorrect answer
            // decremeent time from setTime()
            // return message "Incorrect Answer"

        console.log(e.target.getAttribute("data-answer-index"));
    })
    
    //gereate btn for each answer
    questions[questionNumber].answers.forEach((answer, answerIndex) => {
        var answerBtn = document.createElement("div");
        answerBtn.className = "btn btn-primary answerBtn";
        answerBtn.setAttribute("data-answer-index", answerIndex);
        answerBtn.textContent = answer;
        answers.appendChild(answerBtn);
    });
    questionsContainer.appendChild(questionElement);
    questionsContainer.appendChild(answers);

}
generateQuestion(currentQuestion);

}







