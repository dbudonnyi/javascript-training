const findLongestWord = function(string) {
  let longerst = '';
  string.split(' ').forEach(word => {
    if (word.length > longerst.length) longerst = word;
  });
  return longerst;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
