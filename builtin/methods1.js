places = ["Paris", "New york", "switzerland"];
place = places.pop();
console.log(place);   //switzerland
console.log(places);  //[ 'Paris', 'New york' ]
console.log("===================================");

places = ["Paris", "New york", "switzerland"];
var index = places.indexOf("New york");
console.log(places.indexOf("New york")); //1
places.splice(index,1)
console.log("after delete "+places);  //Paris,switzerland
console.log("===================================");


places = ["Paris", "New york", "switzerland"];
var r = places.shift();
console.log(r);   //Paris
console.log(places);  //["New york", "switzerland"]
console.log("===================================");

places = ["Paris", "New york", "switzerland"];
var r = places.unshift('India');
var r = places.unshift('UN','usa');
console.log(places);  //[ 'UN', 'usa', 'India', 'Paris', 'New york', 'switzerland' ]
console.log(r);   //6
console.log("===================================");
console.log(typeof places);

/*
The shift() method removes the first item of an array.
Note: This method changes the length of the array.
Note: The return value of the shift method is the removed item.
Tip: To remove the last item of an array, use the pop() method.
Note: this method will change the original array.

The unshift() method adds new items to the beginning of an array, and returns the new length.
Note: This method changes the length of an array.
Tip: To add new items at the end of an array, use the push() method.
The unshift() method does not work properly in Internet Explorer 8 and earlier: the 
values will be inserted, but the return value will be <em>undefined

*/
