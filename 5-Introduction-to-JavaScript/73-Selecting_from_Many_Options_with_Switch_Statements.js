/* Learned:
  - a 'switch' statement evaluates the argument given many cases.
  = `break;` makes sure the next code doesn't get executed. 
*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case 1: answer = "alpha";
      break;
    case 2: answer = "beta";
      break;
    case 3: answer = "gamma";
      break;
    case 4: answer = "delta";
      break;
  }

  // Only change code above this line  
  return answer;
}

// Change this value to test
caseInSwitch(1);
