/* Learned:
  - Deconstructing can also be done with nested objects.
  - to take the values from an object within an object (destructure it), the property _containing_ the object is referenced,
    and then the property reassignment occurs within brackets after the first level property is referenced.
  - Below,
    `const {tomorrow: {max: maxOfTomorrow}} = forecast`
    takes the object referenced by `forecast`, looks at its `tomorrow` property, and assigns the value of _its_ `max` property to the variable
      `maxOfTomorrow`

*/

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const {tomorrow: {max: maxOfTomorrow}} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6