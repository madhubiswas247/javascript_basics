/*
Beware of Automatic Type Conversions
Beware that numbers can accidentally be converted to strings or NaN (Not a Number).

JavaScript is loosely typed. A variable can contain different data types, and a variable can change its data type:

Example

*/

var x = "Hello";     // typeof x is a string
x = 5;               // changes typeof x to a number
//x = 5 + 7;    // x.valueOf() is 12, typeof x is a number
//x = 5 + "7";  // x.valueOf() is 57, typeof x is a string
//x = "5" + 7;  // x.valueOf() is 57, typeof x is a string
//x = 5 - 7;    // x.valueOf() is -2, typeof x is a number
//x = 5 - "7";  // x.valueOf() is -2, typeof x is a number
//x = "5" - 7;  // x.valueOf() is -2, typeof x is a number
//x = 5 - "x";  // x.valueOf() is NaN, typeof x is a number
//When doing mathematical operations, JavaScript can convert numbers to strings:

//Subtracting a string from a string, does not generate an error but returns NaN (Not a Number):

//Example
"Hello" - "Dolly"    // returns NaN