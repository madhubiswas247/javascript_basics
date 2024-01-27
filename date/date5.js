var msec = Date.parse("March 21, 2012");  //1332268200000
//Date.parse() returns the number of milliseconds between the date and January 1, 1970:


var msec1 = Date.parse("March 21, 2012");  //Wed Mar 21 2012 00:00:00 GMT+0530 (India Standard Time)
var d = new Date(msec1);

//Date.parse(string) returns milliseconds.
//You can use the return value to convert the string to a date object:

var d1 = "June 39, 2020"; //an invalid date  
var m1 = Date.parse(d1); 
console.log(m1)  //NaN