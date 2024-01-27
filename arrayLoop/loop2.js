//--------------------reduce---------------------------------

var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
var nums = [2, 3, 5, 5, 1, 7, 7];

var petCounts = pets.reduce(function (obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});
console.log(petCounts);

var num1 = nums.reduce(function (obj, pet) {
    console.log(obj)
   // console.log(pet)
    if (!obj[pet]) {
      obj[pet] = 1;
    } else {
      obj[pet]++;
    }
    return obj;
  }, {'0': 1});
  console.log(num1);

var petCounts1 = pets.reduce(function (obj, pet) {
  if (!obj["dog"]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});

console.log(petCounts1); //{ dog: 2, chicken: NaN, cat: NaN, rabbit: NaN }

//--------------------------every--------------------------
let animals = [
  { name: "Tibbers", type: "cat", isNeutered: true, age: 2 },
  { name: "Fluffball", type: "rabbit", isNeutered: false, age: 1 },
  { name: "Strawhat", type: "cat", isNeutered: true, age: 5 },
];

let allNeutered = animals.every((animal) => animal.isNeutered);
console.log(allNeutered); //false
//will return false because not all values under isNeutered evaluates to true
//This makes it good for quickly checking whether everything inside an array meets the criteria.

//---------------------------some----------------------------

let someAreCats = animals.some((animal) => animal.type === "cat");
console.log(someAreCats); //true
// will return true because at least one animal.type returned 'cat'.
