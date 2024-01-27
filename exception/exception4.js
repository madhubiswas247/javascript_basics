try {
console.log("A");
var res = 10 + b;
console.log("B");
} catch(error) {
console.log("C");
} finally {
console.log("D");
}

//ACD
//control will move to second block(catch) after 2nd line in try block
//you can throw an error inside try,catch and finally blocks
//youcan throw an error inside catchblock which was caught