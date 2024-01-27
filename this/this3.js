var person = {
    name: "bar",
    greet: function() {
        console.log("outer this");
        console.log(this);
        console.log(this.name);
        (function() {
            console.log("inner this");
            console.log(this);
            console.log(this.name);
        }()); 
    },
    scopeThis: function() {
        return this === person;
    }
};

person.greet();
/*
outer this
{
  name: 'bar',
  greet: [Function: greet],
  scopeThis: [Function: scopeThis]
}
bar

inner this
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function (anonymous)]
  }
}
undefined
*/