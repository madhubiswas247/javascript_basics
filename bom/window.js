/*
The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
The Browser Object Model (BOM)
There are no official standards for the Browser Object Model (BOM).
Since modern browsers have implemented (almost) the same methods and properties for 
JavaScript interactivity, it is often referred to, as methods and properties of the BOM.
The Window Object
The window object is supported by all browsers. It represents the browser's window.
All global JavaScript objects, functions, and variables automatically become members of the window object.
Global variables are properties of the window object.
Global functions are methods of the window object.
Even the document object (of the HTML DOM) is a property of the window object:
window.document.getElementById("header");
is the same as:
document.getElementById("header");
Window Size
Two properties can be used to determine the size of the browser window.
Both properties return the sizes in pixels:
window.innerHeight - the inner height of the browser window (in pixels)
window.innerWidth - the inner width of the browser window (in pixels)
The browser window (the browser viewport) is NOT including toolbars and scrollbars.
*/