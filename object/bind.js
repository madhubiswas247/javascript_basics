var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    display: function(){
        console.log(this.registrationNumber + " " + this.brand);
    },

    displayDetails: function(ownerName){
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}
var myCarDetails1 = car.display.bind(car); 
myCarDetails1(); // GA12345 Toyota
var myCarDetails = car.displayDetails.bind(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota
myCarDetails()