/* Learned:
  - A custom function that returns a random integer  between  2 specified integers
    can be done with some math. 
    The minimum value possible would be the lowest random number (0) + the min value.
    The maximum value possible would be the max value argument, which would be random() * (max + 1), but since that could return 0,
      we'll subtract min from max in the multiplicand and then add the min back after it's been multiplied.
*/

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin); // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);