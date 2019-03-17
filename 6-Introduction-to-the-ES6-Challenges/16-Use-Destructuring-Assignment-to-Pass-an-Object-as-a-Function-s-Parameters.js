/* Learned:
  - If you're just using the destructured object in a single function, the destructuring can be done by passing in
    the object properties in defining the function.
  - 
  `function doSomething = ({property1, property4}) =>{
    console.log(property1, " and ", property4)
  }
  const bigObject = {
    property1: "Oscar",
    property2: "the",
    property3: "Grouch",
    property4: "the Cat"
  }
   
  doSomething(bigObject);
  `
  will only take property1 and property4's values from `bigObject` to do something with, and ignore its other properties
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function () {
  "use strict"; // do not change this line

  // change code below this line
  return function half({ max, min }) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015