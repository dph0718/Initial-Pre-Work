/* Learned:
  - Even though JavaScript can do Type Coersion, 
    Sometimes you'll want the data as a particular data type.
  - `parseInt(string)` will return an integer: the string converted to an integer data type.
  - * `NaN` is also an `Integer` data type.
*/

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

