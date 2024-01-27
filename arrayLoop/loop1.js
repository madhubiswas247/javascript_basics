//---------map-----------------

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((item) => item * 2);
console.log(doubled); // [2, 4, 6, 8]


//-----------filter---------------
const numbers1 = [1, 2, 3, 4];
const evens = numbers1.filter((item) => item % 2 === 0);
console.log(evens); // [2, 4]

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
  console.log(studentGrades);

  //----------reduce-----------------------------------------------------------------------------
  //The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
  const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce( (result, item)=>  result + item, 0);
console.log(sum); // 10

//----------------------find-----------------------------------
//returns the first occurrence 
const b = students.find((item) => item.name === 'Sam');
console.log(b)  //{ name: 'Quincy', grade: 96 }  
