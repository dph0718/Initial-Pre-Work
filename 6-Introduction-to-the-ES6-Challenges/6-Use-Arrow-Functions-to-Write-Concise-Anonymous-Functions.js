/* Learned:
  - Arrow functions provide a more concise way of  writing small functions.
  - If there's no function body and just a return value, `return ` is implicit, and whatever comes after the arrow is returned.
  
*/

// var magic = function() {
//   "use strict";
//   return new Date();
// };

const magic = () => new Date();