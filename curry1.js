function curry(a) {
    return function (b) {
        return a*b;
    }
}

const answer = curry(3);
console.log(typeof answer)
for(let i=1;i<=10;i++) {
    console.log(answer(i))
}



/**
 
 */