/*It is a good coding practice to put all declarations at the top of each script or function.

This will:

Give cleaner code
Provide a single place to look for local variables
Make it easier to avoid unwanted (implied) global variables
Reduce the possibility of unwanted re-declarations*/
// Declare at the beginning
var firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;
//This also goes for loop variables:

// Declare at the beginning
var i;

// Use later
for (i = 0; i < 5; i++) {}
//By default, JavaScript moves all declarations to the top (JavaScript Hoisting).