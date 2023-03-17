//Defining Variables
const quizContainer = document.querySelector(".quiz");
const questionElement = document.querySelector(".question");
const choicesElement = document.querySelector(".choices");
const timeElement = document.getElementById("time");
const timerDuration = 60; // unit = seconds

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