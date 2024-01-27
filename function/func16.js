function f1(){
    console.log(b)          //undefined
    var b;
}
f1()

/*The previous code will not throw an error, even though the variable 
i was accessed before its declaration!
In JavaScript, before any function executes, all the local variables
 are hoisted in the function. Hoisting is a phenomenon, where no matter
  where the variable is declared inside the function, they are all pushed 
  as the first statements inside the function during the function execution.*/

function f2(){
    console.log(b)   //b is nt defined
}
f2();

/*
In JavaScript, any variable declared 
with the var keyword inside a function, is considered local.
 However, if the variable is created with var outside a function, 
 it still behaves like a global variable. 
*/