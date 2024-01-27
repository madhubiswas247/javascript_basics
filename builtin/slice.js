places = ["Paris", "New york", "switzerland"];
var r = places.slice();
var r1 = places.slice(0,2);
var r2 = places.slice(-3,-1);
console.log(r);  //[ 'Paris', 'New york', 'switzerland' ]
console.log(places);  //[ 'Paris', 'New york', 'switzerland' ]
console.log(r1);  //[ 'Paris', 'New york' ]
console.log(places);//[ 'Paris', 'New york', 'switzerland' ]
console.log(r2);  //[ 'Paris', 'New york' ]
console.log(places);//[ 'Paris', 'New york', 'switzerland' ]
console.log("===================================");

/*
start	Optional. An integer that specifies where to start the selection 
(The first element has an index of 0). Use negative numbers
 to select from the end of an array. If omitted, it acts like "0"
end	    Optional. An integer that specifies where to end the selection. If omitted, 
all elements from the start position and to the end of the array will be selected.
 Use negative numbers to select from the end of an array
Note: The original array will not be changed.
Return Value:	A new Array, containing the selected elements
*/