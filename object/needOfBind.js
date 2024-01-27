var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

//The above will work perfectly fine as long as we use it this way:

car.displayDetails(); // GA12345 Toyota
//But what if we want to borrow a method?

var myCarDetails =  car.displayDetails;
myCarDetails();

/*
Well, this won’t work as the “this” will be now assigned to 
the global context which doesn’t have neither the registrationNumber nor the brand property.
*/