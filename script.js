// 6 BALLS CREATION
const colorBalls = document.querySelector('.colors__content');

for (let i = 1; i <= 6; i += 1) {
  const theBall = document.createElement('div');
  theBall.className = 'ball';
  theBall.id = i;
  // const r = randomNumber(0, 255);
  theBall.style.backgroundColor = 'green';
  colorBalls.appendChild(theBall);
  // console.log(Math.random(255) * 100);
}
