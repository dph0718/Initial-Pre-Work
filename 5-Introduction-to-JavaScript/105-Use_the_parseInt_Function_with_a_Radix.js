/* Learned:
  - `parseInt()` can take a second parameter, defining the radix of the integer output.
  -  `parseInt('100', 8)` assumes `100` is in base 8, and returns the equivalent value in base 10: `64`
  -  `parseInt('101110', 5)` assumes `101110` is in base 5, and returns the equivalent value in base 10: `3280`.
*/
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");