/* Learned:
  - The `require()` in ES5 keyword brings in _every_ function from the required file
  - In ES6, the `import` keyword allows you to pick and choose which functions from a required file
    are imported. 
*/

import { capitalizeString } from "string_functions"

"use strict";
capitalizeString("hello!");