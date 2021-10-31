// 6 BALLS CREATION
const colorBalls = document.querySelector('.colors__content');
const divAnswer = document.querySelector('#answer');
const divScore = document.querySelector('#score');
const setColor = [];
const divBall = document.getElementsByClassName('ball');
const divRGB = document.querySelector('#rgb-color');
let myScore = 0;

/* Genrate a random number until the chosen number
*/
function random(number) {
  return Math.round(Math.random() * number);
}

/* On page loading, the function newGame() is called, then the balls are created with a random color
*/
function newGame() {
  for (let i = 1; i <= 6; i += 1) {
    const theBall = document.createElement('div');
    theBall.className = 'ball';
    theBall.id = i;
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    theBall.style.backgroundColor = color;
    setColor.push(color);
    colorBalls.appendChild(theBall);
    divAnswer.innerHTML = 'Escolha uma cor';
  }
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
function resetGame() {
  for (let i = 0; i < 6; i += 1) {
    if (divBall.length > 0) {
      colorBalls.lastElementChild.remove();
      setColor.pop();
      clicked = false;
    }
  }
  newGame();
}

const btnReset = document.querySelector('#reset-game');
btnReset.addEventListener('click', resetGame);
