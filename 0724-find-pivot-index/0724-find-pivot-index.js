/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    //sum array[0] to array[i-1] = array [i+1] to array[end]
    //return nums[i]
    let leftSum = 0
    let rightSum = 0
    let pivot = -1
for(let i = 0; i < nums.length; i++) {
    // if (i = 0) leftSum = 0
    // if (i = nums.length - 1) rightSum = 0
    leftSum = nums.slice(0, i).reduce((a,b)=>(a+b),0)
    console.log(leftSum, "left sum")
    rightSum = nums.slice(i+1, nums.length).reduce((a,b)=>(a+b),0)
    console.log(rightSum,"right sum")
    if (leftSum == rightSum) return i
    
    }
    return pivot
}