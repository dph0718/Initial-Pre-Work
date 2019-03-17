/* Learned:
  - Arrays, like objects,  can be destructured.
  Unlike the spread operator, distinct elements can be selected from arrays by skipping indices using commas:
    `const [a,b,,,,,,h] = array`
    `const a` will be array[0], `const b` will be array[1], and `const h` will be array[7]
  -Below, array reassignment is used to say `[a ,b]` be assigned to the deconstructed values of [b, a]
    , so `a` will be assigned the value of `b` and `b` will be assigned the value of `a`
*/

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [b, a]

  // This also works.
  // [b,a] = [a,b]

  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8