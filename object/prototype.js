function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.nationality = "English";
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName
  };
  
  var myFather = new Person("John", "Doe", 50, "blue");
  console.log("The nationality of my father is " + myFather.nationality)
  console.log("My father is " + myFather.name())

  //The JavaScript prototype property allows you to add new properties
  //and new methods to object constructors:
  /*
  The nationality of my father is English
My father is John Doe


All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.
*/