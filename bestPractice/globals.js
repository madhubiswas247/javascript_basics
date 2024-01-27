/*
By reducing your global footprint to a single name, you significantly reduce the chance of 
bad interactions with other applications, widgets, or libraries."
*/

//Bad
var name = 'Jeffrey';
var lastName = 'Way';
function doSomething() {}
console.log(name); // Jeffrey -- or window.name

//Better
var DudeNameSpace = {
   name : 'Jeffrey',
   lastName : 'Way',
   doSomething : function() {}
}
console.log(DudeNameSpace.name); // Jeffrey