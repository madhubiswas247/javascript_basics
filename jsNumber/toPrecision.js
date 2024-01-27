var num = 13.3714;
var num1 = 0.001658853;
console.log( num.toPrecision()); //13.3714
console.log(num.toPrecision(2)); //13
console.log(num.toPrecision(3)); //13.4
console.log(num.toPrecision(1)); //1e+1
console.log(num.toPrecision(4)); //13.37
console.log(num.toPrecision(5)); //13.371
console.log(num.toPrecision());  //13.3714
console.log(num.toPrecision(2));  //13
console.log(num.toPrecision(3));  //13.4
console.log(num.toPrecision(10));  //13.37140000

console.log("-----------------------------------")
console.log( num.toFixed()); //13
console.log(num.toFixed(2)); //13.37
console.log(num.toFixed(3)); //13.371
console.log(num.toFixed(1)); //13.4
console.log(num.toFixed(4)); //13.3714
console.log(num.toFixed(5)); //13.37140


/*
The toPrecision() method formats a number to a specified length.
A decimal point and nulls are added (if needed), to create the specified length.
*/