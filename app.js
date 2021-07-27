// DECLARING VARIABLES FOR ELEMENTS
const alreadyGuessed = document.querySelector('.already-guessed');
const gameWord = document.querySelector('.game-word');
const incorrectGuesses = document.querySelector('.incorrect-guesses')
let userGuess = document.getElementById('letter-input')
let randomWord = 'hangman'
let guessedLetters = [];
let correctGuess = [];
let incorrectGuessedLetters = []
let notYetGuessedLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let wrongGuesses = 6
let splitWord = randomWord.split('')
let numberShowing = incorrectGuesses
 
numberShowing.innerText = wrongGuesses

// FUNCTION TO START GAME
function startGame() {
    showWord()
    determineWin()
}

// FUNCTION TO SHOW THE WORD THAT IS BEING PLAYED
function showWord() {
    for (i = 0; i < splitWord.length; i++) {
        const letterDivs = document.createElement('div')
        letterDivs.setAttribute('class', 'letter-div')
        letterDivs.innerHTML = '_'
        gameWord.appendChild(letterDivs)
    }
}

// FUNCTION TO CHECK PLAYER GUESS AGAINST WORD BEING PLAYED
function checkLetter() {
    console.log('letter checked')
    // INDEX OF
    const result = splitWord.indexOf(userGuess.value)
    if (result === -1) {
        console.log('wrong')
            wrongGuesses--
            numberShowing.innerText = wrongGuesses
    }
    for (let i = 0; i < splitWord.length; i++) {
        if (userGuess.value === splitWord[i]) {
            let letterDivs = document.querySelectorAll('.letter-div')
            letterDivs[i].innerHTML = userGuess.value
            correctGuess.push(userGuess.value)
            console.log(correctGuess)
        }
    }
}

// FUNCTION TO GRAB INPUT FROM PLAYER 
function guessLetter() {
    event.preventDefault()
    guessedLetters.push(userGuess.value) 
    checkLetter()
    // Keep this last
    userGuess.value = ''
}

// FUNCTION TO DETERMINE WINNER
function determineWin() {
    if (splitWord.length === correctGuess.length) {
        console.log('winner')
    }
}


startGame()