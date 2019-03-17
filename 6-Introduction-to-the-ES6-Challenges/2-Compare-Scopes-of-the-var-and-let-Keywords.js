/* Learned:
  - `var` declared variables are leaky - they'll be assigned the value to every occurence of the variable within a function
  - `let` declared variables remain defined only within the scope (the block of code) in which they were declared;
*/

function checkScope() {
  "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }
  
  checkScope();