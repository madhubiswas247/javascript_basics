//function as object
var a=function myfunc(a,b){
    console.log("hi")
    console.log(b)
    return a;
}

console.log(a(1,1))
console.log(myfunc(1,1))  //myfunc is nt defined

//hi 1 1
//In JavaScript, functions are actually objects.
// That means a function can be stored in a variable. 