const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 }; // Object { foo: "bar", x: 42 }
const mergedObj = { ...obj1, ...obj2 }; // Object { foo: "baz", x: 42, y: 13 }
const merge = ( ...objects ) => ( { ...objects } );
let mergedObj1 = merge (obj1, obj2);
let mergedObj2 = merge ({}, obj1, obj2);
console.log(clonedObj)   //{ foo: 'bar', x: 42 }
console.log(mergedObj)  //{ foo: 'baz', x: 42, y: 13 }
console.log(mergedObj1) //{ '0': { foo: 'bar', x: 42 }, '1': { foo: 'baz', y: 13 } }
console.log(mergedObj2)  //{ '0': {}, '1': { foo: 'bar', x: 42 }, '2': { foo: 'baz', y: 13 } }