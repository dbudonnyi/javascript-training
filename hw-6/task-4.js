// eslint-disable-next-line import/extensions
import objUsers from './users.js';

const getInactiveUsers = users => {
  return users.filter(obj => obj.isActive === false);
};

console.log(getInactiveUsers(objUsers)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
