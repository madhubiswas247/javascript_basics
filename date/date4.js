/*
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
The ISO format follows a strict standard in JavaScript.

The other formats are not so well defined and might be browser specific.
*/
var d = new Date("2015-03-25") //Wed Mar 25 2015 05:30:00 GMT+0530 (India Standard Time)
//ISO 8601 is the international standard for the representation of dates and times.
//The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format
//The computed date will be relative to your time zone.
//Depending on your time zone, the result above will vary between March 24 and March 25.
var d = new Date("2015-03");  //Sun Mar 01 2015 05:30:00 GMT+0530 (India Standard Time)
//ISO dates can be written without specifying the day (YYYY-MM):
//Time zones will vary the result above between February 28 and March 01.
var d = new Date("2015");  //Thu Jan 01 2015 05:30:00 GMT+0530 (India Standard Time)
//ISO dates can be written without month and day (YYYY):
//Time zones will vary the result above between December 31 2014 and January 01 2015.
var d = new Date("2015-03-25T12:00:00Z");  //Wed Mar 25 2015 17:30:00 GMT+0530 (India Standard Time)
//time is not set here...remove Z to set time
//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
var d = new Date("2015-03-25T12:06:00"); //Wed Mar 25 2015 12:06:00 GMT+0530 (India Standard Time)
var d = new Date("2015-03-25T12:00:00-06:30");  //Wed Mar 25 2015 23:30:00 GMT+0530 (India Standard Time)
//Modify the time relative to UTC by adding +HH:MM or subtraction -HH:MM to the time.
//UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).


