console.log( Math.abs(-7.25));  //7.25
console.log( Math.abs(7.25));   //7.25
console.log( Math.abs(null));   //0
console.log( Math.abs("hello"));  //NaN
console.log( Math.abs(2+3));  //5
/*	A Number, representing the absolute value of the specified number, or NaN if
 the value is not a number, or 0 if the value is null
*/

console.log(Math.cbrt(125));  //5
console.log(Math.cbrt(null));  //0
console.log(Math.cbrt("h:")); //NaN
console.log(Math.cbrt(120+5));  //5
//returns the cubic root of a number.

console.log(Math.ceil(1));  //1
console.log(Math.ceil(1.2)); //2
console.log(Math.ceil(1.7));  //2
console.log(Math.ceil(1.0)); //1
console.log(Math.ceil(-5.1));  //-5
console.log(Math.ceil(-5.9));  //-5
/*
The ceil() method rounds a number UPWARDS to the nearest integer, and returns the result.
If the passed argument is an integer, the value will not be rounded.
*/

console.log(Math.floor(1));  //1
console.log(Math.floor(1.2)); //1
console.log(Math.floor(1.7));  //1
console.log(Math.floor(1.0)); //1
console.log(Math.floor(-5.1));  //-6
console.log(Math.floor(-5.9));  //-6
// A Number, representing the nearest integer when rounding downwards

console.log(Math.round(1));  //1
console.log(Math.round(1.2)); //1
console.log(Math.round(1.5)); //2
console.log(Math.round(1.7));  //2
console.log(Math.round(1.0)); //1
console.log(Math.round(-5.1));  //-5
console.log(Math.round(-5.9));  //-6
//Rounds x to the nearest integer

console.log(Math.log(2.7183));  //1.0000066849139877
console.log(Math.log(2)); //0.6931471805599453
console.log(Math.log(1)); //0
console.log(Math.log(0));  //-Infinity
console.log(Math.log(-1)); //NaN
//A Number, representing the natural logarithm of a specified number

console.log(Math.max(5, 10));  //10
console.log(Math.max(0, 150, 30, 20, 38, 150)); //150
console.log(Math.max(-5, 10)); //10
console.log(Math.max(-5, -10));  //-5
console.log(Math.max(1.5, 2.5));  //2.5
//Return the number with the highest value

console.log(Math.min(5, 10));  //5
console.log(Math.min(0, 150, 30, 20, 38, 150)); //0
console.log(Math.min(-5, 10)); //-5
console.log(Math.min(-5, -10));  //-10
console.log(Math.min(1.5, 2.5));  //1.5
//Return the number with the lowest value

console.log(Math.pow(0, 1));//0
console.log(Math.pow(1, 1));//1
console.log(Math.pow(1, 10));//1
console.log(Math.pow(3, 3));//27
console.log(Math.pow(-3, 3)); //-27
console.log(Math.pow(2, 4)); //16
console.log(Math.pow(2, null)); //1
console.log(Math.pow(2, 0)); //1
//	A Number, representing the value of x to the power of y (x^y)

console.log(Math.floor((Math.random() * 10) + 1)); 
//display a random number between 1 and 10
console.log(Math.random()); 
//The random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive)
console.log(Math.floor((Math.random() * 100) + 1));
//display a random number between 1 and 100

console.log(Math.sqrt(0)); //0
console.log(Math.sqrt(1)); //1
console.log(Math.sqrt(9)); //3
console.log(Math.sqrt(64));  //8
console.log(Math.sqrt(65));  //8.06225774829855
console.log(Math.sqrt(-9));  //NaN
console.log(Math.sqrt(-5));  //NaN
console.log(Math.sqrt(-64));  //NaN
//square root of a number

console.log(Math.trunc(8.76));   //8
console.log(Math.trunc(8));   //8
console.log(Math.trunc(-8.76));   //-8
console.log(Math.trunc(-8));   //-8
console.log(Math.trunc(-0.0));   //-0
/*eturns the integral part of the a numeric
 expression, x, removing any fractional digits. If x is already an integer,
 the result is x.
 It simply remove the decimals.
 */

console.log(Math.exp(1));  //2.718281828459045
console.log(Math.exp(0));  // 1
console.log(Math.exp(-1));  //0.36787944117144233
console.log(Math.exp(5)); //148.4131591025766
console.log(Math.exp(10));//22026.465794806718
/*
console.log(Math.exp(1)); is same as console.log(Math.pow(2.718281828459045,1))
Math.exp(1);  Return Ex, where x is 1
The exp() method returns the value of Ex, where E is Euler's number (approximately 2.7183) 
and x is the number passed to it.
*/