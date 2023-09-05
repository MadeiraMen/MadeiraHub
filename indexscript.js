const playButton = document.getElementById('cat-button');
const realCatElement = document.getElementById('realcat-audio');
const lowCatElement = document.getElementById('lowcat-audio');
const highCatElement = document.getElementById('highcat-audio');

// Add a click event listener to the button
playButton.addEventListener('click', () => {
    let randomInt = getRandomInt(1, 100);

    if(randomInt < 80)
    {
        if (realCatElement.paused || realCatElement.ended) {
            realCatElement.currentTime = 0;
            realCatElement.play();
        }
    } else if(randomInt < 90)
    {
        if (highCatElement.paused || highCatElement.ended) {
            highCatElement.currentTime = 0;
            highCatElement.play();
        }
    } else {
        if (lowCatElement.paused || lowCatElement.ended) {
            lowCatElement.currentTime = 0;
            lowCatElement.play();
        }
    }

    
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }