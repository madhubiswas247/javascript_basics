//anonymous func in HOF
function greet(choice){
	choice();
}
greet(function(){ console.log("Hello World")});
// Hello World
/* we can pass one function as a parameter to another function. 
Usually, for such purposes we can create a function without a name. 
Such functions without a name are called anonymous functions
*/