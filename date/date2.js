var date=new Date("2013-07-09")
console.log(date.getDate())  //9 Get the day as a number (1-31)
console.log(date.getDay())   //2  Get the weekday as a number (0-6)
console.log(date.getMonth())  //6 Get the month as a number (0-11)
console.log(date.getUTCMonth())  //6
console.log(date.toString())   //Tue Jul 09 2013 05:30:00 GMT+0530 (India Standard Time)
console.log(date.getUTCDate())  //9
console.log(date.getUTCDay())  //2
console.log(date.getUTCFullYear())   //2013
console.log(date.getUTCMonth())    //6
console.log(date.getTimezoneOffset())   //-330
console.log(Date.now())   //1598283400799

var d=new Date("2013-07-08")
console.log(date>d)   //true
console.log(d.toLocaleDateString()) //08/07/2013
