function curry(add) {
    return function (first) {
         return function (second) {
            return add(first, second)
         }
    }
}


const add = (a,b)=> a+b;
const currySum = curry(add);
const first = currySum(3)
console.log(first)
const second = first(4)
console.log(second)


// const sub = (a, b) => a-b;
// const currySub = curry(sub);

console.log(currySum(3)(4))   //7
//console.log(currySub(3)(4))   //7