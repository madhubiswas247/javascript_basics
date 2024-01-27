const personObj1 = {
    name: 'Christa',
    age: 20
};

let person = personObj1;
person.age = 25;

console.log(personObj1); // -> { name: 'Christa', age: 25 }
console.log(person); // -> { name: 'Christa', age: 25 }
person = {    ////assignment changed not modified
    name: 'John',
    age: 50
};

const personObj2 = person;


console.log(personObj2); // -> { name: 'John', age: 50 }
console.log(person); // ->{ name: 'John', age: 50 }