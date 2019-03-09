/* Learned:
  - Bracket notation can replace switch/case statements by immediately looking up the 
    object's key: value pair. 
*/

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

  // switch (val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }

  var result = lookup[val]

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("alpha");
