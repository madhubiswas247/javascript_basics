let activities = [
    ['Work', 9,8],
    ['Eat', 1,9],
    ['Commute', 2,7],
    ['Play Game', 1,8],
    ['Sleep', 7,0]
];


// loop the outer array
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
   // console.log(activities[i]);
   // console.log(innerArrayLength);
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}

/*
[0,0] = Work
[0,1] = 9
[0,2] = 8
[1,0] = Eat
[1,1] = 1
[1,2] = 9
[2,0] = Commute
[2,1] = 2
[2,2] = 7
[3,0] = Play Game
[3,1] = 1
[3,2] = 8
[4,0] = Sleep
[4,1] = 7
[4,2] = 0
*/
console.log("=========================================");

activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data);
    });
});

/*
Work
9
Eat
1
Commute
2
Play Game
1
Sleep
7
*/