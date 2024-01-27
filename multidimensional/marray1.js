let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];
console.table(activities);
console.log(activities[0][1]); // 9

/*
The following example defines a two-dimensional array named activities:
To show the activities array in the console, you use the console.table()
To access an element of the multidimensional array, you first use square brackets to access an element of the outer array that returns an inner array; and then use another square bracket to access the element of the inner array.
The following example returns the second element of the first inner array in the activities array above:
*/
