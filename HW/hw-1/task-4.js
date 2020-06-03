const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const input = prompt('Введите количество дроидов которые вы хотите купить?');
if (input === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = parseInt(input, 10) * pricePerDroid;
  console.log(
    totalPrice > credits
      ? 'Недостаточно средств на счету!'
      : `'Вы купили [${input}] дроидов, на счету осталось [${credits -
          totalPrice}] кредитов.'`,
  );
}
