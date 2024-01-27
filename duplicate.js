function removeDuplicateUsingSet(arr) {
  let unique_array = Array.from(new Set(arr));
  let bc = [...new Set(arr)];
  console.log(bc);
  return unique_array;
}

let arr = [4, 5, 6, 4, 7, 4, 8];
newarr = removeDuplicateUsingSet(arr);
console.log(newarr);

let str = "geeksforgeeks";
let fug = str.split("");
newstr = removeDuplicateUsingSet(fug);
sum = "";
// for(let i of newstr)
// {
//     sum = sum +i;

// }

console.log(sum);
console.log(newstr.join(""));

//string is alphanumeric or not
let input_string = "@i9898h*_";
let pattern = new RegExp("\\w");
console.log(pattern.test(input_string));
