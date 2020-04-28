let input;
let total = 0;

for (;;) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  } else if (/^\d+\.?\d*$/.test(input)) {
    total += parseInt(input, 10);
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
}
alert(`Общая сумма чисел равна [${total}]`);
