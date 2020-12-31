function isPalindrome(word) {
  let arr = word.split('');
  let arrReverse = arr.reverse();
  if(word ===arrReverse.join(''))
      return true;
  else
      return false;
}

// Do not edit this line;
module.exports = isPalindrome;
