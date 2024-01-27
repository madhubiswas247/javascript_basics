a=2;
b=3;
c=4;
a*=b+c
console.log(a)  //14
/*
a *= b + c
is equivalent to a = a * (b + c)
and not a = a * b + c

The compound assignment operators consist of a binary operator and the simple assignment 
operator. They perform the operation of the binary operator on both operands and store 
the result of that operation into the left operand, which must be a modifiable lvalue.
*/
