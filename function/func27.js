function f1(num1){
    console.log(num1)    
}
f1(100,200)
//100


function f2(num1,...num2){
    console.log(num1)
    console.log([...new Set(num2)])      
}
f2(100,200,3,4,4,5,6,6)
//100 [ 200, 3, 4, 5, 6 ]