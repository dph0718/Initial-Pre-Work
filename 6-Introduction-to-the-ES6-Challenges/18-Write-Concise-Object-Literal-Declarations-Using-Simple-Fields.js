/* Learned:
  - ES6 eliminates redundancy in  creating objects with properties defined by values as arguments
    - within a function with parameter `faveColor`, the expression ` {faveColor}` will 
    reference the property "faveColor" and assign it the value of the argument.
*/

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return { name, age, gender };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object