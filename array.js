var points = new Array(); // Bad
var points = []; // Good
var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10]; // Good
//The new keyword only complicates the code. It can also produce some unexpected results:
var points = new Array(40, 100); // Creates an array with two elements (40 and 100)
//What if I remove one of the elements?
var points = new Array(40); // Creates an array with 40 undefined elements !!!!!

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon"; // adds a new element (Lemon) to fruits
//Adding elements with high indexes can create undefined "holes" in an array:
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', <2 empty items>, 'Lemon' ]

var fruits = ["Banana", "Orange", "Apple", "Mango"];
typeof fruits; // returns object
//The typeof operator returns object because a JavaScript array is an object.
//Solution 1:
//To solve this problem ECMAScript 5 defines a new method Array.isArray():
//The problem with this solution is that ECMAScript 5 is not supported in older browsers.
Array.isArray(fruits); // returns true
//Solution 2:
//To solve this problem you can create your own isArray() function:
function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
}
//The function above always returns true if the argument is an array.
//Or more precisely: it returns true if the object prototype contains the word "Array".
//Solution 3:
//The instanceof operator returns true if an object is created by a given constructor:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits instanceof Array; // returns true

/*
Many programming languages support arrays with named indexes.
Arrays with named indexes are called associative arrays (or hashes).
JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes.  
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.
*/
