/* Learned:
  - the `class` keyword replaces the constructor function,
    and has to use the keyword `constructor`, which takes parameters to assign as values to properties of the created object
*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'