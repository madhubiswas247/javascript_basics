x = 42; // implicitly creates window.x
var y = 43;
var myobj = {h: 4}; // create object with property h
var myobj1 = {h: 4};
let c = 6;
const p = 89;
var a = [2,3,4]
let h  = [2,3,4]

delete x;       // returns true (can delete if created implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete non-configurable properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj1;   //returns false cant delteif declared with var
delete c;      //returns false
delete p;       //returns false
delete a[1];    //returns true
delete h[1];

//console.log(x)      //x is not defined
console.log(y)          //43
console.log(myobj)      //{}
console.log(myobj1)     //{ h: 4 }
console.log(c)          //6
console.log(p);      //89
console.log(a[1]);   //undefined     a =  [ 2, <1 empty item>, 4 ]
console.log(h);      //[ 2, <1 empty item>, 4 ]

/*
he delete operator deletes an object's property. The syntax is:
delete object.property;
delete object[propertyKey];
delete property; // legal only within a with statement
*/