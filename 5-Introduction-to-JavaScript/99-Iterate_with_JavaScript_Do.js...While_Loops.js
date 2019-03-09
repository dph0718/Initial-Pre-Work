/* Learned:
    - a `do{} while()` loop is like a `while(){}` loop, except
        the `do{}` will execute at least once before the `while()` condition is checked.
    */

    // Setup
var myArray = [];
var i = 10;

// Only change code below this line.
do {
  myArray.push(i);
  i++;
}
while (i < 10);

