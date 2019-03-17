/* Learned:
  - Using `const` to declare a variable makes the variable unable to be reassigned a value.
  - Common practice is to name `const` variables in ALL_CAPS with underscores between words.
*/

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");