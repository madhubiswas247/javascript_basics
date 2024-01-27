
const reference = [1];
const refCopy = reference;
reference.push(2);
refCopy.push(3)
console.log(reference, refCopy);  //[ 1, 2, 3 ] [ 1, 2, 3 ]
console.log(typeof reference);  //object

const arrRef = ['Hi!'];
const arrRef2 = arrRef;

console.log(arrRef === arrRef2); // -> true


const arr1 = ['Hi!'];
const arr2 = ['Hi!'];

console.log(arr1 === arr2); // -> false