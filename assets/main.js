//Defining Variables
const quizContainer = document.querySelector(".quiz");
const questionElement = document.querySelector(".questions");
const choicesElement = document.querySelector(".choices");
const startButton = document.getElementById("start");
const timeElement = document.getElementById("time");
let timerDuration = 50; // unit = seconds
let currentQuestionIndex = 0;
let score = 0;

// Defines the quiz questions and answer choices
const quizData = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyperlink Text Mark Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does JS stand for?",
    choices: ["Java Style", "JavaScript", "Java Source", "Just Saying"],
    answer: "JavaScript",
  },
];

function startQuiz() {
  //hide the start btn on click
  console.log(startButton);
  startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    startTimer();
    displayQuestion();
  });

  //displays the questions and answers
  function displayQuestion() {
    //retrieves current quiz question object
    const currentQuestion = quizData[currentQuestionIndex];

    //displays the Question
    questionElement.textContent = currentQuestion.question;

    //displays answer choices
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(function (choice) {
      const button = document.createElement("button");
      button.classList.add("d-flex", "flex-column", "btn-primary");
      button.textContent = choice;
      choicesElement.appendChild(button);

      /*adding event listener to select choices, which
        will be checked- deducting time if wrong, moving
        on if right */
        button.addEventListener("click", function () {
            if (choice === currentQuestion.answer) {
              //checking if correct, adds to current score.
              currentQuestionIndex++;
              score++;
              console.log("score");
              if (currentQuestionIndex < quizData.length) {
                displayQuestion();
              }
            } else {
              //incorrect answer time penalty
              timerDuration -= 10;
            }
            if (currentQuestionIndex === 3 && score === 3 || timerDuration === 0) {
                showScore();
            }        
      });
    });
  }

  function showScore() {
    // hide the timer element
    timeElement.style.display = "none";
  
    // create a new HTML element to display the score and initials input
    const scoreElement = document.createElement("div");
    scoreElement.classList.add("score");
  
    // create a heading to display the score
    const scoreHeading = document.createElement("h2");
    scoreHeading.textContent = `Your score is: ${score}`;
    scoreElement.appendChild(scoreHeading);
  
    // create a form to submit initials
    const form = document.createElement("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent form from submitting
      const initials = event.target.elements.initials.value.trim();
      // handle the initials input (e.g. save to localStorage, update high scores)
    });
    scoreElement.appendChild(form);
  
    // create a label and input field for the initials
    const label = document.createElement("label");
    label.textContent = "Enter your initials: ";
    const input = document.createElement("input");
    input.type = "text";
    input.name = "initials";
    form.appendChild(label);
    form.appendChild(input);
  
    // create a button to restart the quiz
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", function() {
      location.reload(); // reload the page to restart the quiz
    });
    scoreElement.appendChild(restartButton);
  
    // replace the quiz container with the score element
    quizContainer.replaceWith(scoreElement);
  }
  

  function startTimer() {
    var timer = setInterval(function () {
      timerDuration--;
      timeElement.textContent = timerDuration;

      if (timerDuration <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
}

startQuiz();
