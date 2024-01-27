function changeAgePure(person) {
    const newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}

const alex = {
    name: 'Alex',
    age: 30
};

const alexChanged = changeAgePure(alex);

console.log(alex); // -> { name: 'Alex', age: 30 }
console.log(alexChanged); // -> { name: 'Alex', age: 25 }
console.log(alex === alexChanged); // -> false