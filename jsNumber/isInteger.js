console.log(Number.isInteger(123)) //true
console.log(Number.isInteger(-123)) //true
console.log(Number.isInteger(5-2) )//true
console.log(Number.isInteger(0) )//true
console.log(Number.isInteger(0.5)) //false
console.log(Number.isInteger('123')) //false
console.log(Number.isInteger(false)) //false
console.log(Number.isInteger(Infinity)) //false
console.log(Number.isInteger(-Infinity)) //false
console.log(Number.isInteger(0 / 0) )//false

/*

The Number.isInteger() method determines whether a value an integer.
This method returns true if the value is of the type Number, and 
an integer (a number without decimals). Otherwise it returns false.
Note: The Number.isInteger() method is not supported in Internet Explorer 11 and earlier versions.*/