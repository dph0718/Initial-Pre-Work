/* Learned:
  - Although `const` variables cannot be _reassigned_, they can be _mutated_.
  - Below,  `s` cannot be reassigned with an `=`, but can be changed with array methods, 
    and elements can be reassigned using bracket notation.
*/

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  
  // s = [2, 5, 7]; <- this is invalid
  s.unshift(s[2]);
  s.splice(3);
  console.log(s)

  // change code above this line
}
editInPlace();