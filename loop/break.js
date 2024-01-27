var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i ;
}
console.log(text); //The number is 0The number is 1The number is 2
/*
The break statement can also be used to jump out of a loop.  

The break statement breaks the loop and continues executing the code after the loop (if any):
*/