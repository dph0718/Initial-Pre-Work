/* Learned:
  - the "Rest Operator" allows functions to take multiple arguments, and to treat the arguments as elements in an array.
  - Array methods can then be performed on the argument
    -`...` Literally means "gather the remaining parameters into an array" (src="https://javascript.info/rest-parameters-spread-operator")

*/


const sum = (function () {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

