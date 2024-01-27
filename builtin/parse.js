data='{"empid":785870,"empname":"madhu","age":23}';
empobj=JSON.parse(data)     //converts data to obj
console.log(empobj.age)
console.log(JSON.stringify(empobj))  //convert obj to string in json
//o/p->23
//{"empid":785870,"empname":"madhu","age":23}


data='{"empid":785870,"empname":"madhu","age":23,"address":{"pincode":232432}}';
empobj=JSON.parse(data)         // //will convert JSON string into an object 
console.log(empobj.address.pincode)
console.log(empobj.address['pincode'])
//o/p->232432


//->JSON ARRAY
data='{"empid":785870,"empname":"madhu","age":23,"address":[{"pincode":232432},{"pincode":4325435}]}';
empobj=JSON.parse(data)
console.log(empobj.address[1].pincode)
console.log(empobj.address[1]['pincode'])
//o/p->4325435

