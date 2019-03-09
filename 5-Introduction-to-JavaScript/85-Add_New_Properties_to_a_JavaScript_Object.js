/* Learned:
  - Not only is assigning a value to an object's property possible with dot notation,
  - you can also just up and create a completely new property the same way.
*/

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.bark = "Barf";