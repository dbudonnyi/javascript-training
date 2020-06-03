// eslint-disable-next-line import/extensions
import objUsers from './users.js';

const getUserWithEmail = (users, email) => {
  return users.find(obj => obj.email === email);
};

console.log(getUserWithEmail(objUsers, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(objUsers, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
