console.log(Number.MIN_VALUE);  //5e-324

var x = 100; 
console.log(x.MIN_VALUE);  //undefined
/*
The MIN_VALUE property returns the smallest positive number possible in JavaScript.
This static property has a value of 5e-324.
Note: Numbers smaller than this are converted to 0.
Note: MIN_VALUE is the value closest to 0. The most negative number is the negative MAX_NUMBER.

MIN_VALUE is a static property of the JavaScript Number object. You can only use it as Number.MIN_VALUE.
Using x.MIN_VALUE, where x is a number or a Number object, will return undefined:
*/