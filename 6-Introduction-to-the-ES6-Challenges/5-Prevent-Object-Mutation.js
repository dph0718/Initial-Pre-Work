/* Learned:
  - The `Object.freeze()` method will make the `const` object variable passed in as the parameter an immutable object
    (IOW, CANNOT be changed at all - & still can't be reassigned)
  - 
*/
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line

  Object.freeze(MATH_CONSTANTS)
  // change code above this line

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();