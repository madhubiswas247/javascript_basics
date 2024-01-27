//Use === Comparison
//The == comparison operator always converts (to matching types) before comparison.

//The === operator forces comparison of values and type:

//Example
console.log(0 == "");        // true
console.log(1 == "1");       // true
console.log(1 == true);      // true

    console.log(0 === "");       // false
    console.log(1 === "1");      // false
    console.log(1 === true);     // false

var x;
//x = (0 == "");   // true
//x = (1 == "1");  // true
//x = (1 == true);   // true
//x = (0 === "");  // false
//x = (1 === "1");   // false
//x = (1 === true);  // false
console.log(x)

console.log(0 == []); // true
console.log(0 == {});  //false
console.log(1 == {});  //false
console.log(0 == null);  //false