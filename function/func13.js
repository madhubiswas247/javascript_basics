/*Since functions are treated as objects you can also pass them as a
 parameter to another function. For example, in the below code,
 we are passing the functions welcome() and goodbye() as parameters
  to the function greet()*/
function welcome(){console.log("Hello World");}
function goodbye(){console.log("See you later");}

function greet(choice){
    console.log("Hey");
choice();
}
greet(welcome);
greet(goodbye);

/*Hey
Hello World
Hey
See you later*/
