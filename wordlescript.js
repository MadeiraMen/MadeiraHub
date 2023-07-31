const gridContainer = document.getElementById('grid-container');
const numSquares = 30; // Number of squares (4x4 grid in this example)

let squaresList = [];

for (let i = 0; i < numSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  gridContainer.appendChild(square);

  squaresList[i] = square;
}

const wordToGuess = 'ELITE';
let guessAmount = 0;

let gameOver = false;

function checkGuess() {

if(gameOver=== true) {
  return;
}

  const guessInput = document.getElementById('guess-input');
  const guess = guessInput.value.toUpperCase();
  guessInput.value = '';

  if (guess.length !== 5 || !/^[A-Z]+$/.test(guess)) {
    alert('Please enter a 5-letter word containing only uppercase letters.');
    return;
  }

  const wordLetters = {}; // Store the occurrences of letters in wordToGuess
  const guessLetters = {}; // Store the occurrences of letters in the guess

  // Populate wordLetters and guessLetters
  for (const letter of wordToGuess) {
    wordLetters[letter] = (wordLetters[letter] || 0) + 1;
  }

  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];
    guessLetters[letter] = (guessLetters[letter] || 0) + 1;

    const letterIndexInWord = wordToGuess.indexOf(letter);

    const curSquare = squaresList[5 * guessAmount + i];
    curSquare.innerHTML = letter;
    curSquare.style.border = 'none';

    if (letterIndexInWord === i) {
      //Correct
      curSquare.style.backgroundColor = 'green';
    } else if (letterIndexInWord !== -1 && guessLetters[letter] <= wordLetters[letter]) {
      //Correct but wrong position
      curSquare.style.backgroundColor = 'orange';
    } else {
      //Incorrect
      curSquare.style.backgroundColor = 'grey';
    }
  }

  // Check if the player has won
  if (guess === wordToGuess) {
    document.getElementById('guess-form').style.display = 'none';

    const resultScreen = document.getElementById('result-screen');
    resultScreen.innerHTML = "CORRECT! YOU WON!";
    resultScreen.style.display = 'block';
    return;
  }

  guessAmount++;

  if(guessAmount >= 6)
  {
    gameOver = true;
    document.getElementById('guess-form').style.display = 'none';

    const resultScreen = document.getElementById('result-screen');
    resultScreen.innerHTML = "YOU SUCK!";
    resultScreen.style.display = 'block';

    setTimeout(() => {
      window.location.replace("https://youtu.be/Wm_MHwsvTaQ?t=23");
      return;
    }, 2000);
  }
}

const inputField = document.getElementById('guess-input');

inputField.addEventListener('input', function () {
  this.value = this.value.toUpperCase();
});

inputField.addEventListener('keyup', function(event) {
  // Check if the key pressed is "Enter" (keyCode 13)
  if (event.keyCode === 13) {
    checkGuess();
  }
});
