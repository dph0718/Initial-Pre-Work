/* Learned:
  - Arrow functions provide a concise way of defining anonymous functions, like in the arguments
    of `Array.map()`, `Array.filter()`, and `Array.reduce()`.
    `Array.filter()` returns an array composed of elements that pass the test described by the function within the argument
    `Array.map()` returns an array composed of elements that have been passed into the function within the argument.
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line

  const positiveIntegers = arr.filter(num => num > 0 && num % 1 === 0);

  const squaredIntegers = positiveIntegers.map(num => num * num);

  // change code above this line
  return squaredIntegers;
};
// test your code

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

