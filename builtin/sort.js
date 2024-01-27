var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits
console.log(fruits);  //[ 'Apple', 'Banana', 'Mango', 'Orange' ]

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits
fruits.reverse();     // Then reverse the order of the elements
console.log(fruits);  //[ 'Orange', 'Mango', 'Banana', 'Apple' ]

//NUMERIC SORT
/*By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function:*/

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);  //[ 1, 5, 10, 25, 40, 100 ]

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points);   //[ 100, 40, 25, 10, 5, 1 ]

/*
The purpose of the compare function is to define an alternative sort order.
The compare function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, 
and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
If the result is 0 no changes are done with the sort order of the two values.
*/