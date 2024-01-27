var text = "";
var i;
for (i = 0; i < 5; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
console.log(text);  //The number is 0<br>The number is 1<br>The number is 2<br>The number is 4<br>
/*
The continue statement breaks one iteration (in the loop), 
if a specified condition occurs, and continues with the next iteration in the loop.
This example skips the value of 3:
*/