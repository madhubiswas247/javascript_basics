
places = ["Paris", "New york", "switzerland"];
var r = places.splice(1,2);
console.log("places "+places); //Paris
console.log("r "+r);   //New york,switzerland
console.log("===================================");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var returned = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(returned)  //[]
console.log(fruits)   //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

console.log("===================================");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var returned = fruits.splice(2);
console.log(returned)  //[ 'Apple', 'Mango' ]
console.log(fruits)   //[ 'Banana', 'Orange']

console.log("===================================");

/*
index	            Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
howmany	            Optional. The number of items to be removed. If set to 0, no items will be removed
item1, ..., itemX	Optional. The new item(s) to be added to the array
*/