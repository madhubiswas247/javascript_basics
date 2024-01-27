var person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    details: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
      }
  }
  var person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  var x = person1.fullName.call(person2); 
  var y = person1.details.call(person2, "Oslo", "Norway");
  console.log(x)
  console.log(y)
  //John Doe
  //John Doe,Oslo,Norway
  /*
  With the call() method, you can write a method that can be used on different objects.
  The call() and apply() methods are predefined JavaScript methods.

They can both be used to call an object method with another object as argument.
*/