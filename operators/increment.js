let x = 3;
y = x++;
console.log(y) // y = 3
console.log(x)// x = 4

let a = 2;
b = ++a;
console.log(a)//3
console.log(b)// 3

let c = 2;
d = ++c + c++;  // d = 3 + 3       c = 3+1
console.log(d)  //6
console.log(c)  //4

let e = 2;
f= ++e + ++e;  // d = 3 + 4       c = 4
console.log(f)  //7
console.log(e)  //4

let g = 2;
h= g++ + g++;  // d = 2 + 3       c = 3+1
console.log(h)  //5
console.log(g) //4

let i = 2;
let j = 3;
k= i++ + ++j + ++i;  // k = 3 + 4 + 3     
console.log(i)  //4
console.log(j) //4
console.log(k) //10