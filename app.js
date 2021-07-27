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

let numberSHowing = incorrectGuesses

numberSHowing.innerText = `${wrongGuesses}`

const guessLetter = () => {
    event.preventDefault()
    console.log(userGuess.value)
    guessedLetters.push(userGuess.value)
    console.log(guessedLetters)
    userGuess.value = ''
}


