a="100"
b="300"
console.log(a+b)      //100300
console.log(a-b)     // -200
/* when there is number and string,it wl convert
it into a string automatically when using "+" */

console.log("---------------------------------")
c="100"
d=300
console.log(c+d)  //100300
console.log(c-d) //-200
console.log(d-c)  //200
/*->when there is number and string,it wl convert
it into number automatically when using "-,*,/" */

console.log("---------------------------------")
e="100"
f=300
console.log(f+Number(e))   //400

console.log("---------------------------------")
g="100"
h=300
i=true
j = new String();
console.log(typeof(g))   //string
console.log(typeof(h))    //number
console.log(typeof(i))    //boolean
console.log(typeof(j))    //object

console.log("---------------------------------")
a="100"
b=100
console.log(a==b);       //true
console.log(a===b);       //false
console.log(a!=b);       //false
console.log(a!==b);      //true

console.log("---------------------------------")
a=100
b=200
c=a<b?"Hello":"world"
console.log(c)          //hello

console.log("---------------------------------")
a="100"
b=200
c=a<b?"Hello":"world"
console.log(c)          //hello

console.log("---------------------------------")
a="100"
b=200
c=a+b
d =c<b?"Hello":"world"
console.log(c)          //100200
console.log(d)           //world

console.log("---------------------------------")
var placeToVisit;
console.log(placeToVisit); //undefined


console.log("---------------------------------")
// use of + operator on string
console.log('hello' + ' world!'); // 'hello world!'
console.log('Trip' + 'to' + 'WonderLand'); // 'Trip to WonderLand'
console.log('Trip' + 100); // 'Trip100'
console.log('Trip ' + undefined); // 'Trip undefined' 
console.log('100'+20); //10020
console.log(null + 'Trip'); // 'nullTrip'

//use of typeof() operator
console.log(typeof 100); // "number"
console.log(typeof 'Lets go to Trip'); // "string"
trip = null; 
console.log(typeof trip); // object
console.log(typeof "John"  )               // Returns string
console.log(typeof 3.14    )               // Returns number
console.log(typeof NaN      )              // Returns number
console.log(typeof false                )  // Returns boolean
console.log(typeof [1, 2, 3, 4]         )  // Returns object
console.log(typeof {name:'John', age:34})  // Returns object
console.log(typeof new Date()           )  // Returns object
console.log(typeof function () {}       )  // Returns function
console.log(typeof myCar                )  // Returns undefined (if myCar is not declared)
console.log(typeof null                 )  // Returns object

//use of exponentiation operator (**)
console.log(5**2); // 25

var cars = ["Saab", "Volvo", "BMW"];

console.log(cars instanceof Array   )       // Returns true
console.log(cars instanceof Object  )       // Returns true
console.log(cars instanceof String  )       // Returns false
console.log(cars instanceof Number  )       // Returns false

