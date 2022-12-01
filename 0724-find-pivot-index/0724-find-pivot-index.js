/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
for(let i = 0; i < nums.length; i++) {
    let leftSum = nums.slice(0, i).reduce((a,b)=>(a+b),0)
    let rightSum = nums.slice(i+1, nums.length).reduce((a,b)=>(a+b),0)
    if (leftSum == rightSum) return i
    }
    return -1
}