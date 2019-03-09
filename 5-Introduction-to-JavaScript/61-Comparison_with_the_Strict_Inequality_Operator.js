/* Learned:
  - `!==` means 'not strictly equal', as in, `17` and `"17"` would be not strictly equal.
  `17 !== "17"` returns `true` 
*/

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);