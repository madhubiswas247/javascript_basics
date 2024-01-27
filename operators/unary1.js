var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

console.log(typeof myFun);  // returns "function"
console.log(typeof shape);   // returns "string"
console.log(typeof size); // returns "number"
console.log(typeof foo);  // returns "object"
console.log(typeof today);  // returns "object"
console.log(typeof doesntExist);// returns "undefined"
console.log(typeof null);   //returns "object"
console.log(typeof eval);        // returns "function"
console.log(typeof parseInt);    // returns "function"
console.log(typeof shape.split); // returns "function"
console.log(typeof Date);     // returns "function"
console.log(typeof Function); // returns "function"
console.log(typeof Math);     // returns "object"
console.log(typeof String);   // returns "function"