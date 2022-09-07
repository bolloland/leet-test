/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let array = s.split(" ").filter(x => x.length > 0)
    console.log(array)
    let last = array.splice(-1, 1)
    return last[0].length

    
};