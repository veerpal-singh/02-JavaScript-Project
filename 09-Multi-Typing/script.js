const span = document.querySelector("span")

const wordList = ["Developer", "Coder", "Stundent"]

// let word = "Developer";

let wordIndex = 0;

let characterIndex = 0;

let reverseType = false;

const intervalId = setInterval(function () {

    if (!reverseType) {

        span.textContent = span.textContent + wordList[wordIndex][characterIndex]

        characterIndex++
    } else {
        span.textContent = span.textContent.slice(0, span.textContent.length - 1)
    }

    if (characterIndex === wordList[wordIndex].length) {
        reverseType = true;
    }


    if (span.textContent.length === 0 && reverseType) {

        reverseType = false;
        characterIndex = 0;
        wordIndex++
    }


    if (wordIndex === wordList.length) {
        wordIndex = 0;
    }

}, 200)