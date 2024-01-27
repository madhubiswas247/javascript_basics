console.log(Number.isFinite(123)) //true
console.log(Number.isFinite(-1.23)) //true
console.log(Number.isFinite(5-2)) //true
console.log(Number.isFinite(0)) //true
console.log(Number.isFinite('123')) //false
console.log(Number.isFinite('Hello')) //false
console.log(Number.isFinite('2005/12/12')) //false
console.log(Number.isFinite(Infinity) )//false
console.log(Number.isFinite(-Infinity)) //false
console.log(Number.isFinite(0 / 0) )//false
console.log(Number.isFinite(1 / Infinity) )//true 

console.log("-----------------------------------")
console.log(isFinite(123))   //true
console.log(isFinite(-1.23) )   //true
console.log(isFinite(5-2))  //true
console.log(isFinite(0) )   //true
console.log(isFinite("123") )  //true
console.log(isFinite("Hello") )   //false
console.log(isFinite("2005/12/12")) //false

/*
The Number.isFinite() method determines whether a value is a finite number.
This method returns true if the value is of the type Number, and equates to 
a finite number. Otherwise it returns false.
Number.isFinite() is different from the global isFinite() function. The global 
isFinite() function converts the tested value to a Number, then tests it.
Number.isFinite() does not convert the values to a Number, and will not return 
true for any value that is not of the type Number.
*/