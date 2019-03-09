/* Learned: 
    - Assigning data to a variable is accomplished with the "="
    - The **right** side of the '=' is evaluated before assigning the data to the variable on the **left** side.
    - Below, 'a' is declared without a value, 'b' is declared with the value '2'
        - 'a' is then assigned the value '7' and b is reassigned the value 'a'
        - So: the variable 'b' stores the value '7' now.
*/

// Setup
var a;
var b = 2;

// Only change code below this line

a = 7;
b = a;
