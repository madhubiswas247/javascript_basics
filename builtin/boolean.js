console.log(true)  //true
console.log(false)  //false
console.log(0)     //0
console.log(1)    //1
console.log(false+0)  //0
console.log(true+2)  //3
console.log(false==0)  //true
console.log(false === 0)  //false
console.log(Boolean('true'))  //true
console.log(Boolean('false'))  //true
console.log(Boolean(0))  //false
console.log(Boolean(""))  //false
console.log(Boolean(undefined))  //false
console.log(Boolean(-0))  //false
console.log(Boolean(-1))  //true
console.log(Boolean(50))  //true
console.log(Boolean(NaN))  //false
console.log(Boolean(null)) //false
console.log(Boolean(1>2)) //false
console.log(true%1)  //0
console.log(true === new Boolean(true))  //false
console.log(Boolean(10/"H"))  //false
console.log(Boolean([]))  //true
console.log(Boolean([]==false))  //true
console.log(Boolean({}))  //true

console.log(Boolean({})==false) //false
console.log(Boolean(""==false)) //true
console.log(Boolean(""==1)) //false
console.log(0.1 + 0.2 == 0.3)  //false

var x = new Boolean(false)
var y = new Boolean(false)
console.log(x === y)  //false
console.log( x == y)  //false
console.log(10/"H")  //NaN
console.log(Boolean({} == false))  //false

console.log(0 == []); // true
console.log(0 == {});  //false
console.log(1 == {});  //false
console.log(0 == null);  //false
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()