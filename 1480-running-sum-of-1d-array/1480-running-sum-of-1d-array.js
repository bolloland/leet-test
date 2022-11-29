/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    console.log(nums)
    // nums is an array
    //  for each, nums[i] = nums [i] + all that came before it. 
    if (nums.length == 1 || nums.length == 0) return nums
    let solut = []
    // nums.length == 3 // [2, 3, 4]
    
    for (let i = 1; i < nums.length; i++) {
        solut[0] = nums[0]
        console.log(solut, "solut")
        // let sumArray = solut.reduce((a, b) => a+b)
        // console.log(sumArray, "sumArray")
        solut[i] = nums[i] + solut[i-1] 
        }
    return solut
}

  
    