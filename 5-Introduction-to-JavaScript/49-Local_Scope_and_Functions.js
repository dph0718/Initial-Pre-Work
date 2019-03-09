/* Learned:
  - with `var` in front of a variable declared within a function,
    that function is only scoped _locally_: It can't be used outside that function. 
*/

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 'anything';
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log(myVar);

// Now remove the console log line to pass the test
