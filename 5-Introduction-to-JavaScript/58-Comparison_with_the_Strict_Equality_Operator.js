/* Learned:
  - `===` is strict equality, where both sides have to be the same value AND type. 
*/

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);