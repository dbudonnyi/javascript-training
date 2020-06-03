// eslint-disable-next-line import/extensions
import objUsers from './users.js';

const calculateTotalBalance = users => {
  return users.reduce((acc, obj) => acc + obj.balance, 0);
};

console.log(calculateTotalBalance(objUsers)); // 20916
