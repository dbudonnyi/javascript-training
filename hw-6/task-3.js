// eslint-disable-next-line import/extensions
import objUsers from './users.js';

const getUsersWithGender = (users, gender) => {
  return users.filter(obj => obj.gender === gender).map(obj => obj.name);
};

console.log(getUsersWithGender(objUsers, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
