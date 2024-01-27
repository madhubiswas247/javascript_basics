Number.isNaN(123) //false
Number.isNaN(-1.23) //false
Number.isNaN(5-2) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('2005/12/12') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true
Number.isNaN(0 / 0) //true
/*
The Number.isNaN() method determines whether a value is NaN (Not-A-Number).
This method returns true if the value is of the type Number, and equates 
to NaN. Otherwise it returns false.
Number.isNaN() is different from the global isNaN() function. The global 
isNaN() function converts the tested value to a Number, then tests it.
Number.isNaN() does not convert the values to a Number, and will not return 
true for any value that is not of the type Number.
Tip: In JavaScript, the value NaN is considered a type of number.
*/
console.log(Number.isNaN(5))  //false