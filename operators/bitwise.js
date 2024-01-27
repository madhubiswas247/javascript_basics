const a4 = 5;        // 00000000000000000000000000000101
const b4 = 3;        // 00000000000000000000000000000011
console.log(a4 | b4); // 00000000000000000000000000000111
// expected output: 7
/*
The operands are converted to 32-bit integers and expressed by a series of bits 
(zeroes and ones). Numbers with more than 32 bits get their most significant bits
 discarded. For example, the following integer with more than 32 bits will be converted
  to a 32 bit integer:
Bitwise OR
0	0	0
0	1	1
1	0	1
1	1	1
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
*/


const a3 = 5;        // 00000000000000000000000000000101
const b3 = 3;        // 00000000000000000000000000000011
console.log(a3 ^ b3); // 00000000000000000000000000000110
// expected output: 6
/*
Bitwise XOR (^)
0	0	0
0	1	1
1	0	1
1	1	0
.    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 ^ 9 (base 10) = 00000000000000000000000000000111 (base 2) = 7 (base 10)
*/



const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011
console.log(a & b); // 00000000000000000000000000000001
// expected output: 1
/*
Bitwise AND
0	0	0
0	1	0
1	0	0
1	1	1
.    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
*/