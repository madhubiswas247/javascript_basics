const obj = {
    arr: [{ x: 17 }]
};
 
let z = obj.arr;
 z.push({y:7})
console.log(z)  //[ { x: 17 }, { y: 7 } ]
console.log(obj.arr)//[ { x: 17 }, { y: 7 } ]

z = [{ x: 25 }];    //assignment changed not modified
console.log(z)   //[ { x: 25 } ]
console.log(obj.arr) //[ { x: 17 }, { y: 7 } ]