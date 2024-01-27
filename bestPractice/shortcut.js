/*Shortcut notation is a tricky subject: on the one hand it keeps your code small but on the other you 
might make it hard for developers that take over from you as they might not be aware of the shortcuts. 
Well, here’s a small list of what can (and should) be done.

Objects are probably the most versatile thing you have in JavaScript. The old-school way of writing
 them is doing something like this:
*/
var cow = new Object();
cow.colour = "brown";
cow.commonQuestion = "What now?";
cow.moo = function () {
  console.log("moo");
};
cow.feet = 4;
cow.accordingToLarson = "will take over the world";
/*However, this means you need to repeat the object name for each property or method, which can
 be annoying. Instead it makes much more sense to have the following construct, also called an
  object literal:
*/

var cow = {
  colour: "brown",
  commonQuestion: "What now?",
  moo: function () {
    console.log("moo");
  },
  feet: 4,
  accordingToLarson: "will take over the world",
};

/*Arrays are a confusing point in JavaScript. You’ll find a lot of scripts defining an Array
 in the following way:
*/
var awesomeBands = new Array();
awesomeBands[0] = "Bad Religion";
awesomeBands[1] = "Dropkick Murphys";
awesomeBands[2] = "Flogging Molly";
awesomeBands[3] = "Red Hot Chili Peppers";
awesomeBands[4] = "Pornophonique";
/*This is a lot of useless repetition; this can be written a lot more quickly using the [ ] array
 shortcut:
*/
var awesomeBands = [
  "Bad Religion",
  "Dropkick Murphys",
  "Flogging Molly",
  "Red Hot Chili Peppers",
  "Pornophonique",
];
/*You will come across the term “associative array” in some tutorials. This is a misnomer as arrays
 with named properties rather than an index are actually objects and should be defined as such.
Conditions can be shortened using “ternary notation”. For example, the following construct 
defines a variable as 1 or -1, depending on the value of another variable:
var direction;
*/
if (x > 100) {
  direction = 1;
} else {
  direction = -1;
}
//This can be shortened to a single line:

var direction = x > 100 ? 1 : -1;
/*Anything before the question mark is the condition, the value immediately after it is the
 true case and the one after the colon the false case. Ternary notation can be nested,
  but I’d avoid that to keep things readable.
Another common situation in JavaScript is providing a preset value for a variable if it 
is not defined, like so:
*/
if (v) {
  var x = v;
} else {
  var x = 10;
}
//The shortcut notation for this is the double pipe character:

var x = v || 10;
//This will automatically give x a value of 10 if v is not defined — simple as that.
