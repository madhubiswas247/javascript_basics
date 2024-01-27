function inner() 
{
    var count = 0;
    function outer() {
        count = count + 1
        return count;
    }
return outer;
}

let amm = inner();
console.log(amm());
console.log(amm());

console.log("8"+7+8)
console.log(8+"7"+8)
console.log(8+7+"8")


console.log("81"+7+9)
console.log(7+9+"81")