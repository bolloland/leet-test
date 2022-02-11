/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanMap = {
        "I": 1, 
        "V": 5, 
        "X": 10, 
        "L": 50, 
        "C": 100,
        "D": 500,
        "M": 1000
    }
    // console.log(romanMap)
    let total = 0
//     III  LVIII   MCMXCIV
    for (i = 0; i < s.length; i++) {  
        
     if (romanMap[s[i]] < romanMap[s[i+1]]) {
         // console.log(s, romanMap[s[i]], "first", romanMap[s[i+1]], "second", total, "new total")
         console.log(romanMap[s[i+1]] - romanMap[s[i]])
        total = total - romanMap[s[i]]
         console.log(total, "new total")
     } else  {
         total = total + romanMap[s[i]]
         console.log(total, "new else total")
     }
    }
    return total
};











// EDGE cases first: find subtractions first? if i and i+1 case:  IX ||  IV || XL || XC || CM || CD 