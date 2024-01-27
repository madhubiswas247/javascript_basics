const a = 5; // 00000000000000000000000000000101
const b = 2; // 00000000000000000000000000000010
const c = 1;
console.log(a << b); // 00000000000000000000000000010100  40
console.log(a << c); // 00000000000000000000000000001010  10

/*
Bitwise left shift operator.
The left shift operator (<<) shifts the first operand the specified number of
 bits to the left. Excess bits shifted off to the left are discarded. Zero 
 bits are shifted in from the right.

Bitwise shifting any number x to the left by y bits yields x * 2 ** y.
5*(Math.pow(2,3)) = 5*8 = 40
*/

const a1 = 5; //  00000000000000000000000000000101
const b1 = 2; //  00000000000000000000000000000010
const c1 = -5; // -00000000000000000000000000000101

console.log(a1 >> b1); //  00000000000000000000000000000001    1
console.log(c1 >> b1); // -00000000000000001111111111111110   -2
// expected output: -2
/*
Bitwise right shift operator.
The right shift operator (>>) shifts the first operand the specified number of 
bits to the right. Excess bits shifted off to the right are discarded. Copies of
 the leftmost bit are shifted in from the left. Since the new leftmost bit has the
  same value as the previous leftmost bit, the sign bit (the leftmost bit) does not 
  change. Hence the name "sign-propagating".
*/

const a2 = 5; //  00000000000000000000000000000101
const b2 = 2; //  00000000000000000000000000000010
const c2 = -5; // -00000000000000000000000000000101

console.log(a2 >>> b2); //  00000000000000000000000000000001   1
// expected output: 1
console.log(c2 >>> b2); //  00111111111111111111111111111110    1073741822
// expected output: 1073741822
/*
Unsigned right shift operator
The unsigned right shift operator (>>>) (zero-fill right shift) shifts the first 
operand the specified number of bits to the right. Excess bits shifted off to the
right are discarded. Zero bits are shifted in from the left. The sign bit becomes 0,
so the result is always non-negative. Unlike the other bitwise operators, zero-fill
right shift returns an unsigned 32-bit integer. 

For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result. For example, 9 >>> 2 yields 2, the same as 9 >> 2:
.     9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
However, this is not the case for negative numbers. For example, -9 >>> 2 yields 1073741821, which is different than -9 >> 2 (which yields -3):
.     -9 (base 10): 11111111111111111111111111110111 (base 2)              --------------------------------
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)

 */
