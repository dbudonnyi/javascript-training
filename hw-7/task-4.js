const spanValue = document.querySelector('#value');
let counterValue = parseInt(spanValue.textContent, 10);

const increment = () => {
  // eslint-disable-next-line no-plusplus
  counterValue++;
  spanValue.textContent = counterValue;
};
const decrement = () => {
  // eslint-disable-next-line no-plusplus
  counterValue--;
  spanValue.textContent = counterValue;
};

document
  .querySelector('button[data-action="increment"]')
  .addEventListener('click', increment);
document
  .querySelector('button[data-action="decrement"]')
  .addEventListener('click', decrement);
