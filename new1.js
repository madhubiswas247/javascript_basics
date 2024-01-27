let p = 200;
function joke() {
  console.log(v);
  var v = 10;
  console.log(p);
}
joke();

console.log(p);

function check(param1, param2) {
  param1 = "hello";
  param2.name = "mou";
  param2.marks = 100;
}

var greeting = "hi";
var obj = { name: "mou", marks: 90 };
check(greeting, obj);
console.log(greeting, obj.name, obj.marks); //hi mou 100
