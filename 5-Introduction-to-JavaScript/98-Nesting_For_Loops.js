/* Learned:
  - Multi-dimensional arrays are arrays with arrays as elements.
  - Elements of nested/multi-dimensional arrays can be accessed with consecutive bracket notation:
    i.e., array[9][3] references the fourth element of the 10th sub-array of the top-level array.
  - For loops can be nested to iterate within an iteration (using a different variable for iteration);
*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }

  }
  console.log(product)
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
