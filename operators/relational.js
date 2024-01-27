// Arrays
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees); // returns true
console.log(3 in trees); // returns true
console.log(6 in trees); // returns false
console.log("bay" in trees); // returns false (you must specify the index number,
// not the value at that index)
console.log("length" in trees); // returns true (length is an Array property)

// built-in objects
console.log("PI" in Math); // returns true
var myString = new String("coral");
console.log("length" in myString); // returns true

// Custom objects
var mycar = { make: "Honda", model: "Accord", year: 1998 };
console.log("make" in mycar); // returns true
console.log("model" in mycar); // returns true

for (let i in mycar) {
  console.log("i", i, mycar[i]);
}
/*
i make Honda
i model Accord
i year 1998
*/
for (let i in trees) {
  console.log("tree", i, trees[i]);
}
/*
tree 0 redwood
tree 1 bay
tree 2 cedar
tree 3 oak
tree 4 maple
*/

var theDay = new Date(1995, 12, 17);
console.log(theDay instanceof Date); //true

// Predefined objects
console.log("PI" in Math); // Returns true
console.log("NaN" in Number); // Returns true
console.log("length" in String); // Returns true
