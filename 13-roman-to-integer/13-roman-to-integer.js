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
    let total = 0
    for (i = 0; i < s.length; i++) {  
        
     if (romanMap[s[i]] < romanMap[s[i+1]]) {
        total = total - romanMap[s[i]] //less than? subtract it
     } else  {
         total = total + romanMap[s[i]] //more than? add it
     }
    }
    return total
};











// EDGE cases first: find subtractions first? if i and i+1 case:  IX ||  IV || XL || XC || CM || CD 