// eslint-disable-next-line import/extensions
import objUsers from './users.js';

const getUsersWithEyeColor = (users, color) => {
  return users.filter(obj => obj.eyeColor === color);
};

console.log(getUsersWithEyeColor(objUsers, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
