/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if (nums.length == 1 || nums.length == 0) return nums
    let solut = []
     
    for (let i = 1; i < nums.length; i++) {
        solut[0] = nums[0]
        solut[i] = nums[i] + solut[i-1] 
        }
    return solut
}

  
    