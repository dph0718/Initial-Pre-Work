/* Learned:
  - The **ternary operator** works like so:
    (if this expression is true ) ? (this value will be returned) : (otherwise, this value will be returned)
    `1 === "1" ? "red" : "blue";` returns `"blue"`
    `1 === 1 ? "red" : "blue";` returns `"red"`
*/

function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2);