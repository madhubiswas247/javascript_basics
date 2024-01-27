/*
Never Declare Number, String, or Boolean Objects
Always treat numbers, strings, or booleans as primitive values. Not as objects.

Declaring these types as objects, slows down execution speed, and produces nasty side effects:

*/

var x = "John";        // x is a string
var y = new String("John");  // y is an object
console.log(x===y);

//Or even worse:Example
var x = new String("John");             
var y = new String("John");
(x == y) // is false because you cannot compare objects.

/*
Use {} instead of new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()

*/