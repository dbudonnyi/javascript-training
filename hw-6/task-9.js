// eslint-disable-next-line import/extensions
import objUsers from './users.js';

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(obj => obj.name);
};

console.log(getNamesSortedByFriendsCount(objUsers));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
