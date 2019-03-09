/* Learned:
  -  Ternary operators can be chained, so if the first condition returns false, a second condition can be tested, and so on.
*/

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);