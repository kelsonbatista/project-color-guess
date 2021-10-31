// 6 BALLS CREATION
const colorBalls = document.querySelector('.colors__content');
const divAnswer = document.querySelector('#answer');
const divScore = document.querySelector('#score');
const setColor = [];
const divBall = document.getElementsByClassName('ball');
const divRGB = document.querySelector('#rgb-color');
let myScore = 0;
let setLevel = 6;

/* Genrate a random number until the chosen number
*/
function random(number) {
  return Math.round(Math.random() * number);
}

/* On page loading, the function newGame() is called, then the balls are created with a random color
*/
function newGame(newLevel) {
  if (newLevel) setLevel = newLevel;
  for (let i = 1; i <= setLevel; i += 1) {
    const theBall = document.createElement('div');
    theBall.className = 'ball';
    theBall.id = i;
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    theBall.style.backgroundColor = color;
    setColor.push(color);
    colorBalls.appendChild(theBall);
    divAnswer.innerHTML = 'Escolha uma cor';
  }
  const divLevel = document.querySelector('#level');
  divLevel.innerHTML = `Nível de dificuldade: ${setLevel}`;
  const pickColor = Math.floor(Math.random() * setColor.length);
  divRGB.innerHTML = setColor[pickColor];
}
newGame();

/* The balls are waiting for a click, which will be counted only once per correct answer, that means the score will be added once if the answer is corrected.
*/
let clicked = false;
colorBalls.addEventListener('click', (event) => {
  if (event.target.style.backgroundColor === divRGB.innerHTML) {
    divAnswer.innerHTML = 'Acertou!';
    if (clicked === false) {
      myScore += 3;
      clicked = true;
    }
    divScore.innerHTML = `Pontos: ${myScore}`;
  } else {
    divAnswer.innerHTML = 'Errou! Tente novamente!';
  }
});

/* When click the reset button, all balls are removed and the values of color balls stored in the setColor array are also removed.
*/
function resetGame(newLevel, oldLevel) {
  let newL = newLevel;
  let oldL = oldLevel;
  if (!newL || !oldL) {
    newL = setLevel;
    oldL = setLevel;
  }
  for (let i = 0; i < oldL; i += 1) {
    if (divBall.length > 0) {
      colorBalls.lastElementChild.remove();
      setColor.pop();
      clicked = false;
    }
  }
  newGame(newL);
}

const btnReset = document.querySelector('#reset-game');
btnReset.addEventListener('click', resetGame);

/* Buttons to increase and decrease the difficulty level by setLevel variable which will change the qty of balls
*/
const btnLevelUp = document.querySelector('#level-up');
btnLevelUp.addEventListener('click', () => {
  const oldLevel = setLevel;
  if (setLevel < 12) setLevel += 1;
  resetGame(setLevel, oldLevel);
});

const btnLevelDown = document.querySelector('#level-down');
btnLevelDown.addEventListener('click', () => {
  const oldLevel = setLevel;
  if (setLevel > 2) setLevel -= 1;
  resetGame(setLevel, oldLevel);
});
