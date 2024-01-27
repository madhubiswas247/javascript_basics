
if(someVariableExists)
   x = false
/*Don't Use Short-Hand
Technically, you can get away with omitting most curly braces and semi-colons. Most browsers will 
correctly interpret the following:
 */

if(someVariableExists)
   x = false
   anotherFunctionCall();
//One might think that the code above would be equivalent to:


if(someVariableExists) {
   x = false;
   anotherFunctionCall();
}
//Unfortunately, he'd be wrong. In reality, it means:


if(someVariableExists) {
   x = false;
}
anotherFunctionCall();
/*As you'll notice, the indentation mimics the functionality of the curly brace. 
Needless to say, this is a terrible practice that should be avoided at all costs. 
The only time that curly braces should be omitted is with one-liners, and even
 this is a highly debated topic.

*/