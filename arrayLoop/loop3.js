//--------------map----foreach-------------
const myAwesomeArray = [5, 4, 3, 2, 1]
const m = myAwesomeArray.map(x => x * x)
console.log(m)   //[ 25, 16, 9, 4, 1 ]

const arr = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
  ]
 const f = arr.forEach(element => console.log(element.name))
 console.log(f)  //undefined

//myAwesomeArray.forEach(x => x * x).reduce((total, value) => total + value)
//>>>>>>>>>>>>> Uncaught TypeError: Cannot read property 'reduce' of undefined
const k = myAwesomeArray.map(x => x * x).reduce((total, value) => total + value)
console.log(k)  //55

/*
Like map , the forEach() method receives
 a function as an argument and executes it once for each 
 array element. However, instead of returning a new array like map, it returns undefined.

*/