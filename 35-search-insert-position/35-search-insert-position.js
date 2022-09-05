/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result
    
    if (nums.length == 1 && target < nums[0]) {
        return 0
    }
    
    for (i=0; i < nums.length; i++) {
      if (target == nums[i]) {
          result = i
          break
      } else if (i == 0 && target < nums[i]) {
          result = 0
            break
      } else if (nums[i] < target && target < nums[i+1]) {
          result = i+1
          break
      } else if (nums[i] < target && target > nums[i+1]) {
          continue
      } else if (target > nums[nums.length - 1]) {
          result = nums.length
      }
    }
    return result
        
};


// {
//         return target < nums[0] ? 0 : 
//         target == nums[i] ? i :
//         nums[i] < target && target < nums[i+1] ? i+1 : nums.length-1
//     }