//Defining Variables
const quizContainer = document.querySelector(".quiz");
const questionElement = document.querySelector(".question");
const choicesElement = document.querySelector(".choices");
const startButton = document.getElementById("start");
const timeElement = document.getElementById("time");
let timerDuration = 5; // unit = seconds

// Defines the quiz questions and answer choices
const quizData = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyperlink Text Mark Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What does JS stand for?",
        choices: ["Java Style", "JavaScript", "Java Source", "Just Saying"],
        answer: "JavaScript"
    }
];

function startQuiz() {
    //hide the start btn on click
    console.log(startButton);
    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        startTimer();
    });

    function startTimer() {
        var timer = setInterval(function() {
            timerDuration--;
            timeElement.textContent = timerDuration;

            if (timerDuration <= 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

}
startQuiz();
