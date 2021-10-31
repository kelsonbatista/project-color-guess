// 6 BALLS CREATION
const colorBalls = document.querySelector('.colors__content');

function random(number) {
  return Math.round(Math.random() * number);
}

for (let i = 1; i <= 6; i += 1) {
  const theBall = document.createElement('div');
  theBall.className = 'ball';
  theBall.id = i;
  const r = random(255);
  const g = random(255);
  const b = random(255);
  theBall.style.backgroundColor = `rgb(${r},${g},${b})`;
  colorBalls.appendChild(theBall);
}
