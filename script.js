let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const quizBox = document.getElementById("quiz-box");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const submitButton = document.getElementById("submit-btn");
const timerElement = document.getElementById("time");
const scoreElement = document.getElementById("score-value");
const resultScreen = document.getElementById("result-screen");
const finalScoreElement = document.getElementById("final-score");
const restartButton = document.getElementById("restart-btn");

// Function to shuffle and select 8 random questions
function getRandomQuestions(questions, num) {
    return questions.sort(() => Math.random() - 0.5).slice(0, num);
}

// Start quiz
startButton.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    quizBox.classList.remove("hidden");
    selectedQuestions = getRandomQuestions(allQuestions, 8);
    score = 0;
    currentQuestionIndex = 0;
    loadQuestion();
});

// Load question
function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    startTimer();

    let currentQuestion = selectedQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        let button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectAnswer(button, currentQuestion.answer));
        optionsContainer.appendChild(button);
    });

    submitButton.classList.remove("hidden");
    submitButton.dataset.selected = ""; // Reset selected answer for new question
}

// Start timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            autoSubmit(); // Auto-submit if time runs out
        }
    }, 1000);
}

// Handle answer selection
function selectAnswer(selectedButton, correctAnswer) {
    // Remove 'selected' class from all options
    document.querySelectorAll(".option").forEach(option => {
        option.classList.remove("selected");
    });

    // Add 'selected' class to the clicked option
    selectedButton.classList.add("selected");

    // Store the selected answer for submission
    submitButton.dataset.selected = selectedButton.textContent;
}

// Handle submit button
submitButton.addEventListener("click", () => {
    processAnswer();
});

function autoSubmit() {
    if (!submitButton.dataset.selected) {
        submitButton.dataset.selected = "No Answer"; // Mark it as unanswered
    }
    processAnswer();
}

// Process the selected answer and move to the next question
function processAnswer() {
    clearInterval(timerInterval); // Stop the timer

    let currentQuestion = selectedQuestions[currentQuestionIndex];
    let selectedAnswer = submitButton.dataset.selected;

    if (selectedAnswer === "") {
        alert("Please select an answer before submitting.");
        return;
    }

    if (selectedAnswer === currentQuestion.answer) {
        score++;
    }

    submitButton.classList.add("hidden"); // Hide submit button

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 500);
}

// Display result
function showResult() {
    quizBox.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    finalScoreElement.textContent = `${score} / 8`;
}

// Restart Quiz
restartButton.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});
