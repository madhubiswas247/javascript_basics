//eval() 
//is used to evaluate the JavaScript code that has been represented as a string.
var x=2, y=2; 
console.log(eval("x * y"))          //  4
console.log(eval("2 * 2") )         //  4 
console.log(eval("z = new Date()") )   // z=today’s date 2018-05-12T11:59:59.697Z  
console.log(eval("2"+"2") )         //22

//parseInt()
/*parseInt() parses a string and returns an integer value of 
the radix specified (if not specified, default radix is 10 i.e. 
decimal number system).
Radix is the base in mathematical numeral systems like for 
Decimal (10), Hexadecimal (16), Octal (8) etc. Radix values can range from 2-36.
If parseInt() comes across a character in the string 
that is not a numeral, it will simply ignore it and all the other
 characters that are after it. Then it returns the integer value that
 it has parsed till that particular point.*/
 console.log(parseInt("5"));     // 5
 console.log(parseInt("5.5"));   // 5
 console.log(parseInt("5p0"));   // 5
 console.log(parseInt("p50"));   // NaN (Not a Number)


 //parseFloat() 
 //parses a string and returns a floating point number.
parseFloat("1.23");    // 1.23
parseFloat(".123");    // 0.123
parseFloat("1.23abc"); // 1.23
parseFloat("a123")     // NaN 


//String() 
//converts the value of an object to a string. It is the constructor of the String object.
String(1)                       //  "1"
String(Boolean (0))             //  "false"


//isFinite() 
//determines whether given argument is a finite number or not.
//If the argument is NaN, Infinity, -Infinity then it returns false.
isFinite(0)                 // true
isFinite(NaN)               // false
isFinite("Hi")              // false
isFinite("12Hi")            // false


//isNaN()
// determines whether given argument is "NaN" or not.
//If the argument to the function is not of type Number, then the 
//argument is first coerced to a Number and then it is evaluated.
isNaN('12a');    // true
isNaN(12);       // false   