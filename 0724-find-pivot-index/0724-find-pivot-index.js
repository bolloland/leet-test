/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // let leftSum = 0
    // let rightSum = 0
    // let pivot = -1
for(let i = 0; i < nums.length; i++) {
    let leftSum = nums.slice(0, i).reduce((a,b)=>(a+b),0)
    console.log(leftSum, "left sum")
    let rightSum = nums.slice(i+1, nums.length).reduce((a,b)=>(a+b),0)
    console.log(rightSum,"right sum")
    if (leftSum == rightSum) return i
    }
    return -1
}