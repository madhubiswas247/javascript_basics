/*
Date objects are created with the new Date() constructor.
JavaScript will (by default) output dates in full text string format
There are 4 ways to create a new date object:

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
*/
var d = new Date();
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
//Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)
var d = new Date(2018, 11, 24, 10, 33, 30);  //6 numbers specify year, month, day, hour, minute, second:
//Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)
var d = new Date(2018, 11, 24);   //year month day
//Mon Dec 24 2018 00:00:00 GMT+0530 (India Standard Time)
var d = new Date(2018, 11);  // year and month:
//Sat Dec 01 2018 00:00:00 GMT+0530 (India Standard Time)
var d = new Date(2018); //You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
//Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)
var d = new Date(99, 11, 24);//One and two digit years will be interpreted as 19xx:
//Fri Dec 24 1999 00:00:00 GMT+0530 (India Standard Time)
var d = new Date("October 13, 2014 11:13:00"); //new Date(dateString) creates a new date object from a date string.
//Mon Oct 13 2014 11:13:00 GMT+0530 (India Standard Time)
var d = new Date(0);//JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
var d = new Date(86400000);
//One day (24 hours) is 86,400,000 milliseconds.