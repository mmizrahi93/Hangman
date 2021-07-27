const alreadyGuessed = document.querySelector('.already-guessed');
// const letterInput = document.querySelector('.letter-input');
const gameWord = document.querySelector('.game-word');
const incorrectGuesses = document.querySelector('.incorrect-guesses')
let userGuess = document.getElementById('letter-input')

let randomWord = 'hangman'

let guessedLetters = [];
let incorrectGuessedLetters = []
let notYetGuessedLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let wrongGuesses = 6
let splitWord = randomWord.split('')
let numberShowing = incorrectGuesses

numberShowing.innerText = wrongGuesses

function checkLetter() {
    console.log('letter checked')
    // INDEX OF
    const result = splitWord.indexOf(userGuess.value)
    if (result === -1) {
        console.log('wrong')
            // Figure out method to decrement guesses by one
            wrongGuesses--
            numberShowing.innerText = wrongGuesses
    }
    for (let i = 0; i < splitWord.length; i++) {
        if (userGuess.value === splitWord[i]) {
            console.log('correct')
        }
    }
}

const guessLetter = () => {
    event.preventDefault()
    console.log(userGuess.value)
    guessedLetters.push(userGuess.value)
    console.log(guessedLetters)
    console.log(splitWord)
    checkLetter()
    // Keep this last
    userGuess.value = ''
}

