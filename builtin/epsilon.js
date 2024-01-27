function isEpsilon(num1, num2) {
    return Math.abs( num1- num2) < Number.EPSILON;
}

console.log(isEpsilon(0.1 + 0.2, 0.3));  true
console.log(Number.EPSILON);  //2.220446049250313e-16
console.log(0.1 + 0.2);  //0.30000000000000004
/**
 The EPSILON property returned a value of 2.220446049250313e-16 which represents the smallest 
 +ve number is javascript that is approaching zero
 */