let students = [
  {
    firstName: "Johnny",
    lastName: "Lee",
    age: 20,
  },

  {
    firstName: "Anna",
    lastName: "Zax",
    age: 19,
  },

  {
    firstName: "Zion",
    lastName: "Sanches",
    age: 22,
  },

  {
    firstName: "Anna",
    lastName: "Bax",
    age: 19,
  },
];

// students.sort((a, b) => {
//     return a.age - b.age;
// });

// console.log(students)

students.sort((a, b) => {
  if (a.firstName > b.firstName) {
    return 1;
  } else if (a.firstName < b.firstName) {
    return -1;
  }

  if (a.lastName > b.lastName) {
    return 1;
  } else if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 0;
  }
});

console.log(students);

function sortOnFirstAndLast(a, b) {
  var aa = a.firstName + ", " + a.lastName,
    bb = b.firstName + ", " + b.lastName;
  if (aa > bb) return 1;
  else if (aa < bb) return -1;
  return 0;
}
let currentUsers = students.sort(sortOnFirstAndLast);
console.log(currentUsers);
/*

[
  { firstName: 'Anna', lastName: 'Zax', age: 19 },
  { firstName: 'Johnny', lastName: 'Lee', age: 20 },
  { firstName: 'Zion', lastName: 'Sanches', age: 22 }
]
*/
