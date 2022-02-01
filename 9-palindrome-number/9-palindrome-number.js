/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
    if (x < 0 || x != 0 && x % 10 == 0) { 
        //if x is less than zero OR x isn't equal to 0 but whose last digit IS 0
        return false
    } else {
      let palin = 0  
      //baseline # for our palindrom #
      while (x > palin) { 
          //while original # (12321) is bigger than palindrome...
          palin = (palin * 10) + (x % 10) 
          //take remainder + 10(palin), as Palin increases, this will shift the place holder from 10s to hundereds, etc. 
          x = Math.floor(x/10) 
          // need to keep getting that remainder, so we need to keep dividing by 10 and discard any decimals. 
     }
        return x === palin || x === Math.floor(palin/10)
// 1st instance is for even numbered palindromes, 123 == 123
// 2nd instance is for odd numbered palindromes. Middle number won't matter, so we can divide by 10 and floor it so it matches the first numbers. 
}}
 