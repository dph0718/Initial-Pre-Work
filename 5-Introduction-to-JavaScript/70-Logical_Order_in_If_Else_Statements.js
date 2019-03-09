/* Learned:
  - The order of 'if/else' statements matters.
  - it starts at the top. If a higher statement is true and the function exits, no further else/if's will be executed. 
*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);