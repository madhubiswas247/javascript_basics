// function passed as a paramter
function welcome(){console.log("Hello World");}
function goodbye(){console.log("See you later");}

function greet(choice){
choice();
}

greet(welcome);
greet(goodbye);