/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // n = #times to do fibo
    let sum = 1
    a = 1
    b = 1
    for (i = 1; i < n; i++) {
        sum = a + b
        a = b
        b = sum  
    }
   return sum
};