function binSearch(arr, search_num) {
     let low = 0;
    let high = arr.length -1;
    if(low>high) {
        return -1
    }
 while(low <= high) {
      let mid = Math.round((low+high)/2);
      if(arr[mid] === search_num) {
        return mid;
      }
      if(search_num < arr[mid]) {
         high = mid -1;
      } else {
         low = mid +1;
      }
 }
 return -1;
}

let n = binSearch([2,4,6,8,12,15,18,22,33,44,45,60,89], 5 )
console.log(n)