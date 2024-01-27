const obj = {
    innerObj: {
        x: 9
    }
};
 
const z = obj.innerObj;
 
z.x = 25;
 
console.log(obj.innerObj);  //25
console.log(z);  //25