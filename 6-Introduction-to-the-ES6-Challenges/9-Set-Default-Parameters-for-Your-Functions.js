/* Learned:
  - In ES6, you have the ability to assign a default value to a function's parameters.
  - In the `increment()` function below, a number is passed in, and if no 2nd argument is specified,
    its default value will be `1`. 
*/

// const increment = (function (number, value = 1) {
//   "use strict";
//   return function increment(number, value) {
//   };
// })();

const increment = (number, value = 1) => {
  return number + value;

};
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
