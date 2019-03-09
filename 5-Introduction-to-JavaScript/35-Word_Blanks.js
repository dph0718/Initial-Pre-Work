/* Learned:
  - You take strings as parameters to concatenate them with other strings with a function.
*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "My " + myNoun + " was so " + myAdjective + " that I nearly " + myVerb + " quite " + myAdverb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");