//The setDate() method sets the day of the month to the date object.
var d = new Date();
d.setDate(15);
console.log(d)
//2020-08-15T16:09:03.369Z

const d7 = new Date(2021, 0, 1)
 d7.setDate(3)  
 console.log(d7)
 console.log(d7.getMonth())


const d8 = new Date(2021, 0, 1)
d8.setDate(32)      
console.log(d8)

const d9 = new Date(2021, 0, 2)
d9.setDate(32)      
console.log(d9)

var d0 = new Date();
d0.setDate(0);
console.log(d0)  //2020-07-31T16:14:39.449Z  - last day ofprev month

var d1 = new Date("July 21, 1983 01:15:00");
d1.setDate(15);   
console.log(d1)  //15th july 1983
/*
day	Required. An integer representing the day of a month.
Expected values are 1-31, but other values are allowed:

0 will result in the last day of the previous month
-1 will result in the day before the last day of the previous month
If the month has 31 days:

32 will result in the first day of the next month
If the month has 30 days:

32 will result in the second day of the next month
*/