/* Learned:
  - Math.floor() rounds a decimal to the whole number immediately less than the rounded number.
  - Since Math.random() generates a decimal between 0 & 1, 
   ` Math.floor()` executed on  `Math.random() * num` value will return a random whole number between 0 and `num`'s value.
*/

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}