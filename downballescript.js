const gridContainer = document.getElementById('grid-container');
const numSquares = 30; // Number of squares (4x4 grid in this example)

let squaresList = [];

for (let i = 0; i < numSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  gridContainer.appendChild(square);

  squaresList[i] = square;
}

const input = document.getElementById('autocomplete-input');
const suggestionsList = document.getElementById('suggestions');

const players = [
    'Jacob Kingston',
    'Liam Watts',
    'Blake Keane',
    'Adam Harrison',
    'Adam Tkalec',
    'Alexander Wingjan',
    'John Wilton',
    'Thomas Grigoletto',
    'Minh Vu',
    'Kaspar Nickel',
    'Matthew Wallace',
    'Anthony Moule',
    'Nathan Hugo',
    'Ayden Ikonomopoulos',
    'Lewis Cameron',
    'Joseph Li-Sculli',
    'Samuel Wensor',
    'Jack Sugden',
    'Reinhardt Lategan'
];

class PlayerClass {
  constructor(name, house, english, maths, height, age) {
    this.name = name;
    this.house = house;
    this.english = english;
    this.maths = maths;
    this.height = height;
    this.age = age;
  }
}

//Name,  House,  Type of English you do,  Type of Maths you do,  Height in cm,  Age
const JacobKingston = new PlayerClass('Jacob Kingston', 'Corsini', 'Eng', 'Gen', 175, 18);

const LiamWatts = new PlayerClass('Liam Watts', 'Lisieux', 'Eng', 'Gen', 170, 18);

const BlakeKeane = new PlayerClass('Blake Keane', 'Avila', 'Eng', 'Gen', 190, 18);

const AdamHarrison = new PlayerClass('Adam Harrison', 'Avila', 'Eng', 'Methods', 180, 17);

const AdamTkalec = new PlayerClass('Adam Tkalec', 'Corsini', 'Lang', 'Methods', 175, 18);

const AlexanderWingjan = new PlayerClass('Alexander Wingjan', 'Edith Stein', 'Lang', "Gen, Methods", 190, 17);

const JohnWilton = new PlayerClass('John Wilton', 'Lisieux', 'Lang', 'Gen, Methods', 180, 18);

const ThomasGrigoletto = new PlayerClass('Thomas Grigoletto', 'Avila', 'Lang', 'Gen, Methods', 180, 17);

const MinhVu = new PlayerClass('Minh Vu', 'Avila', 'Eng', 'Methods', 170, 18);

const KasparNickel = new PlayerClass('Kaspar Nickel', 'Avila', 'Lang', 'Methods', 175, 17);

const MatthewWallace = new PlayerClass('Matthew Wallace', 'Edith Stein', 'Eng', 'Gen', 180, 18);

const AnthonyMoule = new PlayerClass('Anthony Moule', 'Avila', 'Eng', 'Gen', 180, 18);

const NathanHugo = new PlayerClass('Nathan Hugo', 'Brandsma', 'VCAL Eng', 'VCAL Num', 175, 17); //done

const AydenIkonomopoulos = new PlayerClass('Ayden Ikonomopoulos', 'Eng', 'Methods', 175, 18);

const LewisCameron = new PlayerClass('Lewis Cameron', 'Soreth', 'Lang', 'Gen, Methods, Spesh', 180, 18);

const JosephLiSculli = new PlayerClass('Joseph Li-Sculli', 'Soreth', 'Lang', 'Methods', 175, 18);

const SamuelWensor = new PlayerClass('Samuel Wensor', 'Soreth', 'Eng', 'Gen', 175, 17);

const JackSugden = new PlayerClass('Jack Sugden', 'Mantua', 'Eng', 'Methods', 175, 17);

const ReinhardtLategan = new PlayerClass('Reinhardt Lategan', 'Soreth', 'Eng, Lang', 'Gen', 175, 18);

const playerClasses = [
  JacobKingston,
  LiamWatts,
  BlakeKeane,
  AdamHarrison,
  AdamTkalec,
  ReinhardtLategan,
  AlexanderWingjan,
  JohnWilton,
  ThomasGrigoletto,
  MinhVu,
  KasparNickel,
  MatthewWallace,
  AnthonyMoule,
  NathanHugo,
  AydenIkonomopoulos,
  LewisCameron,
  JosephLiSculli,
  SamuelWensor,
  JackSugden,
];

const playerToGuess = JohnWilton;

let guessAmount = 0;
let gameOver = false;

function submitPlayer() {

  if(gameOver) return;

  const playerName = input.value;

  let guessedPlayer;

  for(let i = 0; i < playerClasses.length; i++)
  {
    if(playerClasses[i].name === playerName)
    {
      guessedPlayer = playerClasses[i];
      input.value = '';
      break;
    }
  }

  if(guessedPlayer === null)
  {
    alert("This player does not exist!");
    return;
  }

  let rowInt = 6 * guessAmount;

  let nameSquare = squaresList[rowInt];
  nameSquare.innerHTML = guessedPlayer.name;

  if(guessedPlayer.name === playerToGuess.name)
  {
    nameSquare.style.backgroundColor = "green";
    nameSquare.style.color = "white";
  }

  let houseSquare = squaresList[rowInt + 1];
  houseSquare.innerHTML = guessedPlayer.house;

  if(guessedPlayer.house === playerToGuess.house)
  {
    houseSquare.style.backgroundColor = "green";
    houseSquare.style.color = "white";
  }

  let englishSquare = squaresList[rowInt + 2];
  englishSquare.innerHTML = guessedPlayer.english;

  if(guessedPlayer.english === playerToGuess.english)
  {
    englishSquare.style.backgroundColor = "green";
    englishSquare.style.color = "white";
  } else
  {
    let englishSplit = guessedPlayer.english.split(",");

    for(let i = 0; i < englishSplit.length; i++)
    {
      if(playerToGuess.english.includes(englishSplit[i]))
      {
        englishSquare.style.backgroundColor = "#fffa69";
        break;
      }
    }
  }

  let mathsSquare = squaresList[rowInt + 3];
  mathsSquare.innerHTML = guessedPlayer.maths;

  if(guessedPlayer.maths === playerToGuess.maths)
  {
    mathsSquare.style.backgroundColor = "green";
    mathsSquare.style.color = "white";
  } else {
    let mathsSplit = guessedPlayer.maths.split(",");

    for(let i = 0; i < mathsSplit.length; i++)
    {
      if(playerToGuess.maths.includes(mathsSplit[i]))
      {
        mathsSquare.style.backgroundColor = "#fffa69";
        break;
      }
    }
  }

  let heightSquare = squaresList[rowInt + 4];
  heightSquare.innerHTML = guessedPlayer.height;

  if(guessedPlayer.height === playerToGuess.height)
  {
    heightSquare.style.backgroundColor = "green";
    heightSquare.style.color = "white";
  } else {
    let heightSquareText;

    if(guessedPlayer.height < playerToGuess.height)
    {
      heightSquareText = " &#8593;";
    } else{
      heightSquareText = " &#8595;";
    }

    heightSquare.innerHTML += heightSquareText;

    if(Math.abs(guessedPlayer.height - playerToGuess.height) <= 5)
    {
      heightSquare.style.backgroundColor = "#fffa69";
    }
  }

  let ageSquare = squaresList[rowInt + 5];
  ageSquare.innerHTML = guessedPlayer.age;

  if(guessedPlayer.age === playerToGuess.age)
  {
    ageSquare.style.backgroundColor = "green";
    ageSquare.style.color = "white";
  } else {
    let ageSquareText;

    if(guessedPlayer.age < playerToGuess.age)
    {
      ageSquareText = " &#8593;";
    } else{
      ageSquareText = " &#8595;";
    }

    ageSquare.innerHTML += ageSquareText;

    if(Math.abs(guessedPlayer.age - playerToGuess.age) <= 1)
    {
      ageSquare.style.backgroundColor = "#fffa69";
    }
  }

  guessAmount++;

  if(guessedPlayer === playerToGuess)
  {
    document.getElementById("mystery-player-text").innerHTML = playerToGuess.name.toUpperCase();
    document.getElementById("guesses-text").innerHTML = "YOU GUESSED IN " + guessAmount + " GUESSES!";
    document.getElementById("results").style.display = "block";

    openResults();

    gameOver = true;
    input.disabled = true;
    input.placeholder = "Game Over";
    return;
  }

  if(guessAmount >= 5)
  {
    document.getElementById("won-text").innerHTML = "YOU SUCK! THE MYSTERY PLAYER IS";
    document.getElementById("mystery-player-text").innerHTML = playerToGuess.name.toUpperCase();
    document.getElementById("guesses-text").innerHTML = "TRY AGAIN TOMMOROW LOSER!";
    document.getElementById("results").style.display = "block";

    openResults();

    gameOver = true;
    input.disabled = true;
    input.placeholder = "Game Over";
    return;
  }
  
}


input.addEventListener('input', () => {
    if(input.value === '') {
      suggestionsList.innerHTML = '';
      return;
    }

    const inputValue = input.value.toLowerCase();
    const filteredSuggestions = players.filter(player =>
        player.toLowerCase().includes(inputValue)
    );

    displaySuggestions(filteredSuggestions);
});

function displaySuggestions(suggestions) {
    suggestionsList.innerHTML = '';

    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.addEventListener('click', () => {
            input.value = suggestion;
            suggestionsList.innerHTML = '';
            submitPlayer();
        });
        suggestionsList.appendChild(li);
    });
}

function checkEnter(event) {
  if (event.key === "Enter") {
      submitPlayer();
  }
}

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openResults() {
  document.getElementById("post-game").style.display = "block";
}

function closeResults() {
  document.getElementById("post-game").style.display = "none";
}