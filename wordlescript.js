const gridContainer = document.getElementById('grid-container');
const numSquares = 30; // Number of squares (4x4 grid in this example)

let squaresList = [];

for (let i = 0; i < numSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  gridContainer.appendChild(square);

  squaresList[i] = square;
}

const wordToGuess = 'FIZZY';
let guessAmount = 0;

let gameOver = false;

function checkGuess() {
  if (gameOver === true) {
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
  }

  const remainingWordLetters = { ...wordLetters };

  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];
    const curSquare = squaresList[5 * guessAmount + i];
    curSquare.innerHTML = letter;
    curSquare.style.border = 'none';

    if (letter === wordToGuess[i]) {
      // Correct letter in the correct position (green)
      curSquare.style.backgroundColor = 'green';
      remainingWordLetters[letter]--;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];
    const curSquare = squaresList[5 * guessAmount + i];

    if (letter !== wordToGuess[i] && remainingWordLetters[letter] > 0) {
      // Correct letter but in the wrong position (orange)
      curSquare.style.backgroundColor = 'orange';
      remainingWordLetters[letter]--;
    } else if (letter !== wordToGuess[i]) {
      // Incorrect letter (grey)
      curSquare.style.backgroundColor = 'grey';
    }
  }
  
  if(guess === wordToGuess)
  {
    gameOver = true;
    document.getElementById('guess-form').style.display = 'none';

    const resultScreen = document.getElementById('result-screen');
    resultScreen.innerHTML = "CORRECT! YOU WIN!";
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
