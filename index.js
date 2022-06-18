function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length/2; i++){
    const j = word.length - 1 - i;
    if(word[i] === word[j]){
      return true
    }
    return false
  }
}

/* 
  Add your pseudocode here
   If the first letter is sane as the last letter, and the second letter is the same as the second to last letter, etc. until we reach the middle, return true.
  Iterarting from the beginning to the middle
  check each letter corresponds with letter from the end
  if all letters match return true else
  return false
*/

/*
  Add written explanation of your solution here
  The code iterates relatively by comparing start letters corresponding to the letters from the end
  If all letters match it then return true else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
