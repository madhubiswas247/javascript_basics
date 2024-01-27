var str = "hello senorita";
var str1 = str.substring(6);
var str2 = str.substring(7,9);
console.log(str);
console.log(str1);
console.log(str2);
/*hello senorita
senorita
en */
console.log("===================================");

var str = "hello senorita hi";
var str1 = str.split(' ');
var str2 = str.split(' ',1);
var str3 = str.split(' ',2);
var str4 = str.split(' ',-1);
var str5 = str.split('');
var str6 = str.split();
console.log(str);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
/*
hello senorita hi
[ 'hello', 'senorita', 'hi' ]
[ 'hello' ]
[ 'hello', 'senorita' ]
[ 'hello', 'senorita', 'hi' ]
[
  'h', 'e', 'l', 'l', 'o',
  ' ', 's', 'e', 'n', 'o',
  'r', 'i', 't', 'a', ' ',
  'h', 'i'
]
[ 'hello senorita hi' ]
*/
console.log("===================================");

var str = "hello senorita";
var str1 = str.indexOf('o');
var str2 = str.indexOf('o',2);
var str3 = str.indexOf('o',6);
var str4 = str.indexOf('o',10);
console.log(str);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
/*hello senorita
4
4
9
-1 */
console.log("===================================");

var str = "hello senorita";
var str1 = str.search('hello');
var str2 = str.search(' ');
var str3 = str.search('nor');
var str4 = str.search('zu');
var str5 = str.search('senorita');
console.log(str);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
/*hello senorita
0
5
8
-1
6 */
console.log("===================================");

var str = "hello senorita";
var str1 = str.concat('hello', 'hi');
var str2 = str1.concat('hu');
var str3 = str1.concat(str2);
console.log(str);
console.log(str1);
console.log(str2);
console.log(str3);
/*hello senorita
hello senoritahellohi
hello senoritahellohihu
hello senoritahellohihello senoritahellohihu */
console.log("===================================");

var fruits = ['banana', 'orange', 'apple', 'mango'];
console.log(fruits.sort());  //[ 'apple', 'banana', 'mango', 'orange' ]
console.log(fruits.reverse());  //[ 'orange', 'mango', 'banana', 'apple' ]

var fruits = ['banana', 'orange', 'apple', 'mango'];
var a = fruits.lastIndexOf('apple');
console.log(a);  //2