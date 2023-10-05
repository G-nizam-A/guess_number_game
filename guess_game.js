let random = parseInt(Math.random() * 20 + 1);
// console.log(random)

let userInput = document.querySelector('.input');
let submit = document.querySelector('.submit');
let guesses = document.querySelector('.guesses');
let error = document.querySelector('.error');
let remainGuess = document.querySelector('.remain-guess');
let hint = document.querySelector('.hint');
let newBtn = document.querySelector('.new-game');

let prevGuess = [];
remainGuess.textContent = Number(10);

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    userInput.value = '';
    validateGuess(guess);
})

function validateGuess(guess) {
    if (isNaN(guess)) {
        error.textContent = 'Enter a Number';
    }
    else if (guess < 1 || guess > 100) {
        error.textContent = 'Enter no. from 1 - 100';
    }
    else {
        error.textContent = '';

        checkGuess(guess);
        prevGuess.push(guess);
        guesses.textContent += `${guess}, `
        remainGuess.textContent = remainGuess.textContent - 1;

        if (remainGuess.textContent === '0') {
            endGame();
        }
    }
}

function checkGuess(guess) {
    if (guess === random) {
        hint.textContent = 'SUCCESS';
        hint.style.color = "green";
        endGame();
    } else if (guess < random) {
        hint.textContent = 'Low';
        hint.style.color = "red";
    } else if (guess > random) {
        hint.textContent = 'High';
        hint.style.color = "red";
    } else {
        hint.textContent = '';
    }
}


function endGame() {
    newBtn.style.visibility = "visible"
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    error.textContent = 'Game Over';

}

newBtn.addEventListener('click',newGame);

function newGame() {
    newBtn.style.visibility = "hidden"

    random = parseInt(Math.random() * 20 + 1);
    // console.log('New: ', random);

    prevGuess = [];
    error.innerHTML = '';
    guesses.textContent = '';
    hint.textContent = '';

    remainGuess.textContent = Number(10);
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    guess = parseInt(userInput.value);
    userInput.value = '';
    validateGuess(guess);
}
