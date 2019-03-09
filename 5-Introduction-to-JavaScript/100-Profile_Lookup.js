/* Learned:
  - Combined use of for loops, nested if statements, block notation fo object property access,
    `.hasOwnProperty()` method
*/

//Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  console.log('function begins.', contacts.length)
  var nameExists = false;
  var propExists = false
  for (var i = 0; i < contacts.length; i++) {
    console.log('iterating.', i)
    if (contacts[i].firstName == name) {
      console.log(contacts[i].firstName, name)
      console.log(prop, contacts[i].hasOwnProperty(prop))
      nameExists = true;
      if (contacts[i].hasOwnProperty(prop)) {
        propExists = true;
        break;
      };
    };
  };

  var response;

  if (!nameExists) {
    response = "No such contact"
  } else if (!propExists) {
    response = "No such property"
  } else if (nameExists && propExists) {
    response = contacts[i][prop]
  }
  console.log(response)
  return response;
};

// Only change code above this line


// Change these values to test your function
lookUpProfile("Akira", "number");

