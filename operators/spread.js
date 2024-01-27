function sum(x, y, z) {
    console.log(x,y,z)
    return x + y + z;
  }

function myFunction(v, w, x, y, z) {
    console.log(v,w,x,y,z);
    return v + w + x + y + z;
 }
  
  const numbers = [1, 2, 3];
  const args = [0, 1];  
  arr1 = [...numbers, ...args]; 
  const parts = ['shoulders', 'knees']; 
  const lyrics = ['head', ...parts, 'and', 'toes']; 
  
  console.log(arr1)  //[ 1, 2, 3, 0, 1 ]
  console.log(lyrics);  //[ 'head', 'shoulders', 'knees', 'and', 'toes' ]
  console.log(sum(...numbers));// 6
  console.log(sum.apply(null, numbers));// 6
  console.log(myFunction(-1, ...args, 2, ...[3]));  //-1 0 1 2 3 ....5

  lyrics.push(4);
  lyrics[1] = 'eyes'
  console.log(lyrics)  //[ 'head', 'eyes', 'knees', 'and', 'toes', 4 ]
  0
  