// eslint-disable-next-line import/extensions
import objUsers from './users.js';

const getUserNames = users => users.map(obj => obj.name);

console.log(getUserNames(objUsers));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
