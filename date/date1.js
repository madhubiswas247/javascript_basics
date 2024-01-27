const d1 = new Date(2020, 1, 1)   //year month date
console.log(d1)
// The Month argument is zero-based. With a range of 0-11 (using western calendars.)
//‘February’ has an index value of one. (Think of it like an array lookup.)->Feb 01 2020
const d2 = new Date(2020, 0, 1)
console.log(d2)
//january
const d3 = Date('Thu, 01 Jan 1970 00:00:00 GMT')
console.log(d3)
//displays Current Date
//Sun Aug 23 2020 20:59:12 GMT+0530 (India Standard Time)
/*Date('blah') is an alias for new Date().
The missing piece is the new keyword: new Date(dateString). */
const d4 = new Date('2019-01-01')
const d5 = new Date('2019-01-01T00:00')
console.log(d4.getFullYear(), d5.getFullYear())
//2019 2019
/*The Date constructor parses date strings using either UTC/GMT or local time.
The trick is knowing if your local timezone 
will be used… The T00:00 causes it to use UTC/GMT time. */
const date = new Date(2022)
console.log(date.getFullYear())
//A Date instance cannot be created with a single integer as an argument. It is invalid, 
//and will default to the start of ‘computer time’ (milliseconds since Jan 1st, 1970.)
var date1 = new Date(Date.UTC(2022, 0, 1))
console.log(date1.getUTCFullYear(), date1.getFullYear())
//2022 2022
/*DateConstructor.UTC(year: number, month: number, date?: number, hours?: number,
     minutes?: number, seconds?: number, ms?: number): number
Returns the number of milliseconds between midnight, January 1, 1970 Universal 
Coordinated Time (UTC) (or GMT) and the specified date.*/
const d = Date.UTC(2020, 0, 1)
console.log(d)
//Milliseconds since Jan 1st, 1970
//1577836800000
const d6 = new Date(Date.UTC(2020, 0, 1))
console.log(d6.getTimezoneOffset())
/*Gets the difference in minutes between 
the time on the local computer and Universal Coordinated Time (UTC). */
var d7 = new Date();
d7.setFullYear(2023)
console.log(d7)  //2023-08-23T16:20:53.468Z