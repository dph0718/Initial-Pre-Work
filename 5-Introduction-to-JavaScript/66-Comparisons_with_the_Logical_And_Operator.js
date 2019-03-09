/* Learned:
  - `if` statements _could_ be nested,
    but the `&&` operator will test if both conditions are true,  
*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val<= 50 && val >= 25) {
      return "Yes";
    
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);