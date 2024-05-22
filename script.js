const questions = [
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {
                text: "Sahara", correct: false
            },
            {
                text: "Gobi", correct: false
            },
            {
                text: "Antarctica", correct: true
            },
            {
                text: "Kalahari", correct: false
            }
        ]
    },

    {
        question: "Which is the fastest animal on land?",
        answers: [
            {
                text: "Tiger", correct: false
            },
            {
                text: "Gazelle", correct: false
            },
            {
                text: "Cheetah", correct: true
            },
            {
                text: "Horse", correct: false
            }
        ]
    },

    {
        question: "Which is the largest animal in the world?",
        answers: [
            {
                text: "Shark", correct: false
            },
            {
                text: "Eliphant", correct: false
            },
            {
                text: "Blue Whale", correct: true
            },
            {
                text: "Giraffe", correct: false
            }
        ]
    },

    {
        question: "Your taste buds are tiny bumps on your tongue that help you taste food! Where on your tongue can you find taste buds for sweetness ? ",
        answers: [
            {
                text: "The tip of your tongue", correct: true
            },
            {
                text: "The sides of your tongue", correct: false
            },
            {
                text: "The back of your tongue", correct: false
            },
            {
                text: "Evenly spread all over", correct: false
            }
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    // setting values to 0 when restarting or starting a new
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        // Add a data attribute to store the 'correct' property for easy access later
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

startQuiz();