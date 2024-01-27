/*
Use Parameter Defaults
If a function is called with a missing argument, the value of the missing argument is set to undefined.

Undefined values can break your code. It is a good habit to assign default values to arguments.

*/

function myFunction(x, y) {
    if (y === undefined) {
      y = 0;
    }  
    return x * y;
  }

  console.log(myFunction(4))

  //ECMAScript 2015 allows default parameters in the function call:

//function (a=1, b=1) { /*function code*/ }