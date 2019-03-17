/* Learned:
  - In ES6, functions do not have to be declared with the keyword `function`. 
  Instead, they can be declared with: `functionName(parameter){<function here>};`
*/

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);