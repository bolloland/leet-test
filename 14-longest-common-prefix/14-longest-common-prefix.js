/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 1) return strs[0]
    if (strs[0].length == 0 || strs == null || strs.length == 0) return ""
  
      let string = ""
      let smallest = strs.reduce((a, b) => a.length <= b.length ? a : b).split("")
      
    for (let i = 0; i < smallest.length; i++) {
       const letter = smallest[i]
       for (let j = 0; j < strs.length; j++) {
           if (letter != strs[j][i]) return string
       }
        string = string + letter
    }
    
   return string
};

// are first characters the same? if [i][0] == [i+ 1] [0]  Loop thru(char get the index)
    // loop through strings array
    // if str[index] = key charcater, next
    // if not, return what we have 
    
    // let smallest = strs.reduce((a, b) => a.length <= b.length ? a : b).split("")  //smallest.length is max length of common string

