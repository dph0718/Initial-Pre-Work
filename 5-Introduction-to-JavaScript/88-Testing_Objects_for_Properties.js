/* Learned:
  - the `.hasOwnProperty()` method checks to see if the object it's called on
    has a property with the key of the argument.
   `object.hasOwnProperty(variableName)` will return `true` if `object` has a property called `variableName`
*/

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp]
  } else {
    return "Not Found"
  }
}

// Test your code by modifying these values
checkObj("gift");