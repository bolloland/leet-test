/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = []
    nums.sort((a, b) => a - b)
    
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums[i - 1]) continue
        const target = 0 - nums[i]  //  i + j + k = 0
        let j = i + 1
        let k = nums.length - 1
        
        while (j < k) {
            let sum = nums[j] + nums[k]
            if (sum < target) {
                j++
            } else if (sum > target) {
                k--
            } else {
                results.push([nums[i], nums[j], nums[k]])
                while(nums[j] == nums [j + 1]) j++
                while(nums[k] == nums [k - 1]) k--
                j++
                k--
            }
        }
    }
    return results
}
    
