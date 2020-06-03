// eslint-disable-next-line import/extensions
import objUsers from './users.js';

const getSortedUniqueSkills = users => {
  const unique = (acc, obj) => {
    obj.skills.forEach(skill => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
    });
    return acc;
  };

  return users.reduce(unique, []).sort();
};

console.log(getSortedUniqueSkills(objUsers));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
