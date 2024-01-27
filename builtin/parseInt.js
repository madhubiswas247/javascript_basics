/*parseInt() parses a string and returns an integer value of 
the radix specified (if not specified, default radix is 10 i.e. 
decimal number system).
Radix is the base in mathematical numeral systems like for 
Decimal (10), Hexadecimal (16), Octal (8) etc. Radix values can range from 2-36.
If parseInt() comes across a character in the string 
that is not a numeral, it will simply ignore it and all the other
 characters that are after it. Then it returns the integer value that
 it has parsed till that particular point.
Syntax:

parseInt(String, [radix])

Example:
*/
console.log(parseInt("5"));     // 5
console.log(parseInt("5.5"));   // 5
console.log(parseInt("5p0"));   // 5
console.log(parseInt("p50"))   // NaN (Not a Number)


/*parseFloat() parses a string and returns a floating point number.
Syntax:
parseFloat(String)
Example*/
console.log(parseFloat("1.23"));    // 1.23
console.log(parseFloat(".123"));    // 0.123
console.log(parseFloat("1.23abc")); // 1.23
console.log(parseFloat("a123"))     // NaN 

