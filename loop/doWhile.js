var text = ""
var i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 5); 

console.log(text)
//<br>The number is 0<br>The number is 1<br>The number is 2<br>The number is 3<br>The number is 4
/*
The do/while loop is a variant of the while loop. This loop will execute the code block once
, before checking if the condition is true, then it will repeat the loop as long as the
 condition is true.
 The example below uses a do/while loop. The loop will always be executed at least once,
  even if the condition is false, because the code block is executed before the condition is tested:
 */