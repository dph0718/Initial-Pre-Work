/* Learned:
  - Not ONLY can `...` be used as a "rest" operator, combining all remaining arguments into an array,
    it can ALSO be used as a "spread" operator, which "spreads" the following array into comma separated values.
      -BUT: it can only be used as an argument or within an array literal `[]` 
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);