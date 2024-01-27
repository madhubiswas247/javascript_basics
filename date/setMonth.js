var d = new Date();
d.setMonth(4, 20);
console.log(d);
console.log(d.getMonth());
//Set the month to 4 (May) and the day to the 20th:
var d1 = new Date();
d1.setMonth(4);
console.log(d1);
//Set the month to 4 (May):
var d2 = new Date();

d2.setMonth(d2.getMonth(), 0);
console.log(d2);
//Set the date to be the last day of last month:

/*
month	Required. An integer representing the month
Expected values are 0-11, but other values are allowed:

-1 will result in the last month of the previous year
12 will result in the first month of the next year
13 will result in the second month of the next year
day	Optional. An integer representing the day of month
Expected values are 1-31, but other values are allowed:

0 will result in the last day of the previous month
-1 will result in the day before the last day of the previous month
If the month has 31 days:

32 will result in the first day of the next month
If the month has 30 days:

32 will result in the second day of the next month

*/