/*Number(), which is the constructor of Number object, converts 
value of an object to a number. If it is unable to convert the value, 
it returns NaN.
Syntax:
Number(argument)
Example: */
var x="123";					
Number(x);    	           // 123			
Number("123");	           // 123			
Number("123.1");           // 123.1			
Number(true);              // 1
Number(false);             // 0
Number("123abc");          // NaN
Number(new Date()); 
