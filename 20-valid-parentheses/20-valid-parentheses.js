/**
 * @param {string} s
 * @return {boolean}
 */

let isValid = function(s) {
 const stack = []
 
 for (i = 0; i < s.length; i++) {
   let curChar = s[i]
    console.log(curChar, "curChar")
   switch(curChar) {
     case '(': stack.push(")");
           console.log(stack, ")")
       break;
     case '[': stack.push("]");
           console.log(stack, "]")
       break;
     case '{': stack.push("}");
           console.log(stack, "}")
       break;
     default:
       topElement = stack.pop()
           console.log(stack, "after breaks or pop")///removes last element and returns array
       if (curChar !== topElement) return false  
   }
 }
  return stack.length === 0
}

// create a new array (STACK). for every left side, enter right side counterpart in stack
// because it SHOULD be balanced, the first right symbol, should match the last left symbol in the STACK
//  ex: [[()]]
// STACK: [ "]", "]", ")" ] after the iterating thru first 3 symbols
// now example[3] = ")" and that should == stack.pop()  {the last in the array}
