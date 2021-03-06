// DECLARING VARIABLES FOR ELEMENTS
const alreadyGuessed = document.querySelector('.already-guessed');
const gameWord = document.querySelector('.game-word');
const incorrectGuesses = document.querySelector('.incorrect-guesses')
let userGuess = document.getElementById('letter-input')
let wordBank = ["Montgomery","Juneau","Phoenix","Little Rock","Sacramento","Denver","Hartford","Dover","Tallahassee","Atlanta","Honolulu","Boise","Springfield","Indianapolis","Des Moines","Topeka","Frankfort","Baton Rouge","Augusta","Annapolis","Boston","Lansing","St. Paul","Jackson","Jefferson City","Helena","Lincoln","Carson City","Concord","Trenton","Santa Fe","Albany","Raleigh","Bismarck","Columbus","Oklahoma City","Salem","Harrisburg","Providence","Columbia","Pierre","Nashville","Austin","Salt Lake City"]
let guessedLetters = [];
let correctGuess = [];
let incorrectGuessedLetters = []
let notYetGuessedLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let wrongGuesses = 6
let splitWord = []
let numberShowing = incorrectGuesses
 
let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]

numberShowing.innerText = wrongGuesses

// FUNCTION TO START GAME
function startGame() {
    // const letterDivs = document.querySelectorAll('.letter-div')
    //   letterDivs.removeChild()
    getWord()
    
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

function removeLetter() {
    for (i = 0; i < splitWord.length; i++) {
        gameWord.innerHTML = ''
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
    determineWin()
    // Keep this last
    userGuess.value = ''

}

// FUNCTION TO DETERMINE WINNER
function determineWin() {
    if (splitWord.length === correctGuess.length) {
        console.log('winner')
        gameWord.replaceChildren()
    }
}

function getWord() {
    removeLetter()
    let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]
    splitWord = randomWord.split('')
    console.log(randomWord)
    showWord()
    //   startGame()
  };


startGame()