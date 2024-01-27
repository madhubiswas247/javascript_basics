var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    details: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
      }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var x = person.fullName.apply(person1); 
  var y = person.details.apply(person1, ["Oslo", "Norway"]);
  console.log(x)
  console.log(y)


  /*
John Doe
John Doe,Oslo,Norway
  The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.
The apply() method is very handy if you want to use an array instead of an argument list.
*/