// const foo = null ?? 'default string';
// console.log(foo);
// // expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// // expected output: 0
/*The nullish coalescing operator (??) is a logical operator that returns its right-hand side 
operand when its left-hand side operand is null or undefined, and otherwise returns
 its left-hand side operand. */

let count = 0;
let text = "";
let num = 1;

let qty = count || 42;
let message = text || "hi!";
let message1 = text || 0;
let message2 = 0 || "";
let message3 = 42 || "";
let message4 = "" || 42;
let message5 = num || 10
console.log(qty);     // 42 and not 0
console.log(message); // "hi!" and not ""
console.log(message1); // 0
console.log(message2); // ""
console.log(message3); // 42
console.log(message4); // 42
console.log(message5); // 1 //This will automatically give  a value of 10 if num is not defined — simple as that.

/*
if(v){
    var x = v;
  } else {
    var x = 10;
  }
//The shortcut notation for this is the double pipe character:
 */ 
v = undefined;
  var x = v || 10;
  var y = 10 || v;
  console.log(x)  //10
  console.log(y)  //10