//In some browsers, months or days with no leading zeroes may produce an error:

var d = new Date("2015-3-25");
/*The behavior of "YYYY/MM/DD" is undefined.
Some browsers will try to guess the format. Some will return NaN.*/

var d = new Date("2015/03/25");
/*The behavior of  "DD-MM-YYYY" is also undefined.
Some browsers will try to guess the format. Some will return NaN.*/

var d = new Date("25-03-2015");