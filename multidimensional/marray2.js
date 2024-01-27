let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

activities.push(['Study',2]);
console.table(activities);
//o add a new element at the end of the multidimensional array, you use the push() method

activities.splice(1, 0, ['Programming', 2]);
console.table(activities);
/*To insert an element in the middle of the array, you use
the splice() method. The following inserts an element in the second position of the activities array: */

activities.pop();
console.table(activities);
//To remove an element from an array, you use the pop() or splice() method.

