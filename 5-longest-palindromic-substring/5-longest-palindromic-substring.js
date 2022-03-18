/**
 * @param {string} s
 * @return {string}
 */

/*
if center is even ( 4 3 3 4)
if center is odd ( 5 6 7 6 5 )
while useful here?
*/
var longestPalindrome = function(s) {
    if (s.length == 0 || s == null) return '' //edge cases
    
    let longestPal = ''
    
    for (let i = 0; i < s.length; i++) {
        
        let oddPal = expandOut(s, i, i)  //if center is one element, i will represent that center
        let evenPal = expandOut(s, i-1, i) // if center is even, i-1 is left term, i is the right term of that double center.
        
        if (oddPal.length > longestPal.length) {
            longestPal = oddPal
        }
        
        if (evenPal.length > longestPal.length) {
            longestPal = evenPal
        }
        
    }
      return longestPal  
}

//   2   2   5   5    2   2   3

const expandOut = (string, leftSide, rightSide) => {
    let n = 0
    while (string[leftSide - n] && string[leftSide - n] === string[rightSide + n]) {
        n++  // while the leftSide is valid, and then we start looking at either side
    }
    n-- // once that stops, go back to the right value of n when it was true
    
    return string.slice(leftSide - n, rightSide + n + 1)  // because slice will cut off before the last term
}
    

// iterate through array
// testEnds() -> first term == last term
    // let maybe = array.join("")
// if true, run function hackIt() -> hack off first and last term
// testEnds

   // let newArr = s.split(",")
   //  for (i = 0; i < newArr.length; i++) {
   //          let maybe = newArr; //for mathMax comparison
   //          function hackAndCheck() {
   //              if (newArr[0] == newArr[-1]) {
   //              let hacked = newArr.slice(0, -1)
   //              console.log(hacked, "hacked")
   //              hacked < 1 ? maybe : hackAndCheck(hacked)
   //                  longest = maybe.length
   //              } else {
   //                  newArr = newArr.shift()
   //                  hackAndCheck(newArr)
   //              }
   //      }
   //  }     

