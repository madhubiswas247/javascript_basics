var num = 5;
var n = num.toExponential();
console.log(n);//5e+0
//The toExponential() method converts a number into an exponential notation.

var num = 5.56789;
var n = num.toExponential(4);
console.log(n);//5.5679e+0
/*
Optional. An integer between 0 and 20 representing the number of digits in the notation
 after the decimal point. If omitted, it is set to as many digits as necessary to
  represent the value
*/