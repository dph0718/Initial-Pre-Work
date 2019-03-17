/* Learned:
  - `get` and `set` can be used within an object to mask the object's private properties.
  for the Thermostat object below, the `_temp` property is accessed with `thermos.temperature`, and changed with the `thermos.temperature = 0`
  
*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temp) {
      this._temp = temp;
    }

    get temperature() {
      let celsTemp = (this._temp - 32) * (5 / 9)
      return celsTemp;
    }

    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C