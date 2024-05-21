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



