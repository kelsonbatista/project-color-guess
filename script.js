// 6 BALLS CREATION
const colorBalls = document.querySelector('.colors__content');
const divAnswer = document.querySelector('#answer');
const setColor = [];
const divBall = document.getElementsByClassName('ball');
const divRGB = document.querySelector('#rgb-color');

function random(number) {
  return Math.round(Math.random() * number);
}

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
  console.log(pickColor);
  console.log(setColor);
}

function checkColor() {
  for (let i = 0; i < divBall.length; i += 1) {
    console.log(divBall[i]);
    divBall[i].addEventListener('click', (event) => {
      if (event.target.style.backgroundColor === divRGB.innerHTML) {
        divAnswer.innerHTML = 'Acertou!';
      } else {
        console.log(event.target.style.backgroundColor);
        console.log(divRGB.innerHTML);
        divAnswer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
}
newGame();
checkColor();
function resetGame() {
  for (let i = 0; i < 6; i += 1) {
    if (divBall.length > 0) {
      colorBalls.lastElementChild.remove();
      setColor.pop();
    }
  }
  newGame();
  checkColor();
}

const btnReset = document.querySelector('#reset-game');
btnReset.addEventListener('click', resetGame);
