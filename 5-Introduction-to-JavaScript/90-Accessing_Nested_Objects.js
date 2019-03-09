/* Learned:
  - Values of deeply nested objects can be retrieved with chained dot notation or bracket notation. 
*/

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box']; // Change this line
