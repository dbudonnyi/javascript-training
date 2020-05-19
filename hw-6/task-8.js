// eslint-disable-next-line import/extensions
import objUsers from './users.js';

const getUsersWithFriend = (users, friendName) => {
  return users.filter(obj => obj.friends.some(friend => friend === friendName));
};

console.log(getUsersWithFriend(objUsers, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(objUsers, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
