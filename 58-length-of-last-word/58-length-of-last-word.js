/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let array = s.split(" ").filter(x => x.length > 0).splice(-1, 1)
    // let last = array.splice(-1, 1)
    return array[0].length

    
};