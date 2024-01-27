//(parameter) => function body
//An arrow function is a concise way of writing a function.
// Arrow functions are anonymous functions as they don't have a name.
function greet(choice){ 
   choice();
} 
greet(function(){ console.log("Hello World") }); // Hello World
greet(()=>{ console.log("Hello World") }); // Hello World


calculateCost = (ticketPrice, noOfPerson)=>{
    noOfPerson= ticketPrice * noOfPerson;
    return noOfPerson;
}
console.log(calculateCost(500, 2));
// 1000


trip = () => "Let's go to trip."
console.log(trip());
// Let's go to trip.



trip = place => "Trip to " + place;
console.log(trip("Paris"));
// Trip to Paris


trip = _ => "Trip to " + _;
console.log(trip("Paris"));
// Trip to Paris

