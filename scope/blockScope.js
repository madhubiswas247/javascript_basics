function validateTravellerName(name) {
    for (let i = 0; i < name.length; i++) {
     }
  console.log(i); // This will give an error as i is not accessible outside the for block.
}
validateTravellerName("Josh");

function f1()
{
    const a=10
    a=20        //code will given an error as we are modifying a const value
    console.log(a)  
  }
  f1()
  console.log(a)   // will give an error as we are accessing const outside a block:

  /*const is a keyword which is also used to create a block scoped variable. 
  But the difference between const and let is that, a const variable cannot be modified. It is constant.*/