function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.jmm = "English";
  
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");

  
  console.log("My father is " + myFather.age + ". My mother is " + myMother.age);
  console.log("The nationality of my father is " + myFather.nationality)
  /*
  My father is 50. My mother is 48
The nationality of my father is undefined
 you can not add a new property to an existing object constructor:
 To add a new property to a constructor, you must add it to the constructor function:
*/