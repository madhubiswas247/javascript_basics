/*Since functions are treated as objects, you can also return 
them from a function. For example, in the below code, we are 
returning the function welcome() ( stored in variable hello )
 from a function greet():*/
function greet(){
	var hello=function welcome(){console.log("Hello World");}
	return hello;
}
var retFunc=greet();
retFunc();

//Hello World
/*
Higher Order Functions
Functions which can either accept other functions as parameters 
or return other functions as parameters are called as Higher Order Functions.
 Many in-built functions in JS are Higher Order Functions.

First Class Citizen:
Any object which can be assigned, passed as a parameter and returned from 
a function is called a First Class Citizen in a programming language.
 Thus, all functions are First Class Citizens in JS.
*/
