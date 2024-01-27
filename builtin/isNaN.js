/*isNaN() determines whether given argument is "NaN" or not.
If the argument to the function is not of type Number, then the 
argument is first coerced to a Number and then it is evaluated.
Syntax:
isNaN(value)
Example: */
console.log(isNaN('12a'));    // true
console.log(isNaN(12));       // false   

console.log(typeof NaN);                //number
console.log(typeof NaN === "number");   //true
console.log(NaN === NaN);               // false
console.log(NaN == NaN);                // false
