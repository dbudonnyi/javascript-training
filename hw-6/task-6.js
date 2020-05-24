// eslint-disable-next-line import/extensions
import objUsers from './users.js';

const getUsersWithAge = (users, min, max) => {
  return users.filter(obj => obj.age >= min && obj.age <= max);
};

console.log(getUsersWithAge(objUsers, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(objUsers, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
