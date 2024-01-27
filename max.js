n = 2;
var arr = [1, 2, 3, 3, 4, 5, 6, 7, 99, 89];
// let num = Math.max(...arr)
// console.log(num)
// arr.splice(arr.indexOf(num),1)
// console.log(arr)
let a = arr.sort();
let g = a[a.length - 2];
console.log(g);
console.log(a);

let num;
for (i = 0; i < n; i++) {
  num = Math.max(...arr);
  arr.splice(arr.indexOf(num), 1);
}
console.log(num);
console.log(arr);

/*Given a string s1 and a string s2, write a snippet to say whether s2 is a rotation of s1?
(eg given s1 = ABCD and s2 = CDAB, return true, given s1 = ABCD, and s2 = ACBD , return false) */
//if string is cyclic
var str = "ABACD";
var str2 = "ACBD";
var temp = str.concat(str);
result = temp.includes(str2);
console.log(result);

//shortest 3 numbers in unsorted array
var arr = [90, 78, 0, 1, 2, 3, 3, 4, 5, 6, 7, 99, 89];
let num1;
let li = [];
for (i = 0; i < 3; i++) {
  num1 = Math.min(...arr);
  arr.splice(arr.indexOf(num1), 1);
  li.push(num1);
}
console.log(li);

/*strings are given , of which multiple substrings are matching . 
Find the one with max length. Eg : s1: abcdef and s2: avbczxbcde12
Here a , bc and bcde are matching substrings
And expected answer is "bcde".   */

var str = "avbczxbcde12";
var str2 = "abcdef";
let hum = {};
for (i = 0; i < str2.length; i++) {
  str3 = "";
  for (j = i; j < str2.length; j++) {
    str3 = str3 + str2[j];
    //console.log(str3)
    if (str.includes(str3)) {
      hum[str3] = str3.length;
    }
  }
  //comp = str2[i]+str2[i+1];
}
console.log(hum);
let m = Object.keys(hum).find(
  (key) => hum[key] === Math.max(...Object.values(hum))
);
console.log(Math.max(...Object.values(hum)));
console.log(m);
