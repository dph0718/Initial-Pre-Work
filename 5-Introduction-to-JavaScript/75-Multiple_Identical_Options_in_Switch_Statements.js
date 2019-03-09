/* Learned:
  - In a 'switch' statemnet, 
    leaving out the `break;` statement within a case,
    the next case will keep getting executed until it hits a `break;` 
  - Below, if `val == 1`, then `case 1:` is executed. There's no break here, so the next case will get executed.
    Since case 2 doesn't have a `break;` either, we keep trucking to case 3:, where `answer` is assigned "Low" and we break;

  - if `val == 4`, the chain of commands starts at case 4: and continues downward. (Not necessarily in numeric order, as shown here.)
    When it hits a break, we  break out of the switch statement and start doing code outside there.
*/
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }


  console.log("answer: " + answer)
  // Only change code above this line  
  return answer;
}

// Change this value to test
sequentialSizes(7);
