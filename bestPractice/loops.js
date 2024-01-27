/*Loops can become very slow if you don’t do them right. One of the most common mistake is to
 read the length attribute of an array at every iteration:*/

var names = ['George','Ringo','Paul','John'];
for(var i=0;i<names.length;i++){
  doSomeThingWith(names[i]);
}
/*This means that every time the loop runs, JavaScript needs to read the length of the array.
 You can avoid that by storing the length value in a different variable:*/

var names = ['George','Ringo','Paul','John'];
var all = names.length;
for(var i=0;i<all;i++){
  doSomeThingWith(names[i]);
}

/*An even shorter way of achieving this is to create a second variable in the pre-loop statement:*/

var names = ['George','Ringo','Paul','John'];
for(var i=0,j=names.length;i<j;i++){
  doSomeThingWith(names[i]);
}
/*As you'll notice, the indentation mimics the functionality of the curly brace. Needless to say,
 this is a terrible practice that should be avoided at all costs. The only time that curly
  braces should be omitted is with one-liners, and even this is a highly debated topic.*/

1
if(2 + 2 === 4) return 'nicely done';