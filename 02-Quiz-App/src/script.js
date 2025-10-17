const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index = 0;

let total = quizData.length;

let right = 0,
    wrong = 0;

const quesBox = document.querySelector("#quesBox");
const optionInputs = document.querySelectorAll(".options");

function loadQuestion() {

    if (index === total) {
        return endQuiz()
    }

    reset()

    let data = quizData[index]

    quesBox.textContent = `${index + 1}) ${data.question}`;

    optionInputs[0].nextElementSibling.textContent = data.a;
    optionInputs[1].nextElementSibling.textContent = data.b;
    optionInputs[2].nextElementSibling.textContent = data.c;
    optionInputs[3].nextElementSibling.textContent = data.d;

}

function submitQuiz() {

    const data = quizData[index];
    const ans = getAnswer()

    if (ans === data.correct) {
        right++;
    } else {
        wrong++
    }
    index++;
    loadQuestion();
    return;
}

function getAnswer() {
    let answer;
    optionInputs.forEach(function (input) {
        if (input.checked) {

            answer = input.value;

        }
    })
    return answer
}

function reset() {
    optionInputs.forEach(function (input) {
        input.checked = false;
    })
}

function endQuiz() {

    const box = document.querySelector("#box");
    box.innerHTML = `
        <div style = "text-align:center">
            <h3>Thank you for playing Quiz</h3>
            <h2>${right} / ${total} are correct</h2>
        </div>
    `
}

loadQuestion()