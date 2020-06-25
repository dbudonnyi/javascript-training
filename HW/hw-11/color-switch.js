const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
let intervalNum;

btnStart.addEventListener('click', () => {
  btnStop.removeAttribute('disabled');
  btnStop.setAttribute('enabled', '');
  btnStart.removeAttribute('enabled');
  btnStart.setAttribute('disabled', '');
  intervalNum = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStart.removeAttribute('disabled');
  btnStart.setAttribute('enabled', '');
  btnStop.removeAttribute('enabled');
  btnStop.setAttribute('disabled', '');
  clearInterval(intervalNum);
});
