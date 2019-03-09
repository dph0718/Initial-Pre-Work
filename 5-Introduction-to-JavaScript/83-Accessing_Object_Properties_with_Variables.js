/* Learned:
  - using a variable inside squarebrackets accesses the Object's property with the name of the variable's value. 
  
*/

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line