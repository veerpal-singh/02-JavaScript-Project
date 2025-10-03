const boxes = document.querySelectorAll(".box");

const resetBtn = document.querySelector(".resetBtn");

const newGameBtn = document.querySelector(".newBtn");

const msg = document.querySelector(".msg");

const msgContainer = document.querySelector(".msg-container");


let turnO = true;

let winPatterns = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function resetGame() {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hidden")
}

boxes.forEach(function (box) {

    box.addEventListener("click", function () {

        if (turnO) {
            box.textContent = "O";
            turnO = false;
        } else {
            box.textContent = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner()
    })

});

function disableBoxes() {
    for (let box of boxes) {
        box.disabled = true;
    }
};

function enableBoxes() {
    for (let box of boxes) {
        box.disabled = false;
        box.textContent = "";
    }
}


function showWinner(winner) {
    msg.textContent = `Winner is ${winner}`;
    msgContainer.classList.remove("hidden");
    disableBoxes();
};


function checkWinner() {

    winPatterns.map(function (patterns) {

        let pos1Value = boxes[patterns[0]].textContent;
        let pos2Value = boxes[patterns[1]].textContent;
        let pos3Value = boxes[patterns[2]].textContent;

        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {

            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                console.log("Winner = ", pos1Value);

                showWinner(pos1Value);
            }
        }
    })
}


newGameBtn.addEventListener("click", resetGame)

resetBtn.addEventListener("click", resetGame)