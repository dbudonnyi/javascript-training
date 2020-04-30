let input;
const numbers = [];
let total = 0;

for (;;) {
  input = prompt('Enter number');
  console.log(input);
  if (input === null) {
    break;
  } else if (/^\d+\.?\d*$/.test(input)) {
    numbers.push(Number(input));
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
}

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(`Общая сумма чисел равна [${total}]`);
