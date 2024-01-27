var x="123";					
console.log(Number(x));    	           // 123			
console.log(Number("123"));	           // 123			
console.log(Number("123.1"));          // 123.1			
console.log(Number(10/0));             // Infinity
console.log(Number(NaN));              // NaN
console.log(Number("123abc"));         // NaN
console.log(String(1));                       //  "1"
console.log(String("Hello"));                 // "Hello"

//Number(), which is the constructor of Number object, converts value of an object to a number. 
//If it is unable to convert the value, it returns NaN.

//NaN stands for Not a Number. In JS, anything divided by 0 is Infinity