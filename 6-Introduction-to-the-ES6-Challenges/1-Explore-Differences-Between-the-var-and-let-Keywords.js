/* Learned:
  - Using `var` to declare variables is risky, since no error will be thrown if an identical variable is declared elsewhere in the code.
  - Using `let` avoids that issue, as an error will be thrown if it's used to declare a variable more than once.
*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
  return quote;
}
catTalk();