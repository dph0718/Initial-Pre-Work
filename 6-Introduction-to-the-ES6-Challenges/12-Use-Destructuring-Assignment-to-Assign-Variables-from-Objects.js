/* Learned:
  - destructuring can be used to store an Object's property values succinctly as variables.
    One example is below, where 
      `const {tomorrow: tempOfTomorrow} = avgTemperatures` 
        stores the `avgTemperatures` object's "tomorrow" property values as the variable `tomorrow`.
    - destructuring can also be done to store multiple property values from an object:
      if there's an object: `const anObject = {firstProp, secProp}`
      `const {firstProp, secProp} = anObject`
        will take the values of the "firstProp" and "secProp" properties of "anObject"
        and store them simply as the variables `firstProp` and `secProp`
*/

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79