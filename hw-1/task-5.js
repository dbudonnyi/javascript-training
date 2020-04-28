const country = prompt('Введите страну доставки');

switch (country.toLowerCase()) {
  case 'китай':
    console.log('Китай - 100 кредитов');
    break;
  case 'чили':
    console.log('Чили - 250 кредитов');
    break;
  case 'австралия':
    console.log('Австралия - 170 кредитов');
    break;
  case 'индия':
    console.log('Индия - 80 кредитов');
    break;
  case 'ямайка':
    console.log('Ямайка - 120 кредитов');
    break;
  default:
    alert('В вашей стране доставка не доступна');
}
