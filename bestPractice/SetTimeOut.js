//Don't Pass a String to "SetInterval" or "SetTimeOut"
//Consider the following code:


setInterval(
"document.getElementById('container').innerHTML += 'My new number: ' + i", 3000
);
/*Not only is this code inefficient, but it also functions in the same way 
as the "eval" function would. Never pass a string to SetInterval and SetTimeOut.
 Instead, pass a function name.
*/

setInterval(someFunction, 3000);