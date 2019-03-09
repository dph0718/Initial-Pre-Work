/* Learned:
  - functions don't have to have to `return` anything;
    if asked to, they'll returned `undefined` 
    They'll still execute the code inside, though.
*/

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum += 5;
}


// Only change code above this line
var returnedValue = addFive();