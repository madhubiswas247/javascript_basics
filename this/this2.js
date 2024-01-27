var person = {
  name: "bar",
  greet: function () {
    return "Hello " + this.name;
  },
  scopeThis: function () {
    return this === person;
  },
};

console.log(person.greet()); //Hello bar
console.log(person.scopeThis()); //true

var person = {
  name: "bar",
  scopeThis: this,
};

console.log(person.scopeThis); //{}

var person = {
  name: "bar",
  greet: function () {
    console.log("hello" + this.name);
    setTimeout(function () {
      console.log("hello" + this.name);
    }, 0);
  },
};

person.greet(); //helloundefined
