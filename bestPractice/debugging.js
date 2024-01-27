/*
JavaScript Debuggers
Debugging is not easy. But fortunately, all modern browsers have a built-in JavaScript debugger.
Built-in debuggers can be turned on and off, forcing errors to be reported to the user.
With a debugger, you can also set breakpoints (places where code execution can be stopped), 
and examine variables while the code is executing.
Normally, otherwise follow the steps at the bottom of this page, you activate debugging 
in your browser with the F12 key, and select "Console" in the debugger menu.
The console.log() Method
If your browser supports debugging, you can use console.log() to display JavaScript 
values in the debugger window:


Setting Breakpoints
In the debugger window, you can set breakpoints in the JavaScript code.

At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.

After examining values, you can resume the execution of code (typically with a play button). */

a = 5;
b = 6;
c = a + b;
console.log(c);

/*
The debugger Keyword
The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.
This has the same function as setting a breakpoint in the debugger.
If no debugging is available, the debugger statement has no effect.
With the debugger turned on, this code will stop executing before it executes the third line.
*/

var x = 15 * 5;
debugger;
console.log(x);

/*
Chrome
Open the browser.
From the menu, select "More tools".
From tools, choose "Developer tools".
Finally, select Console.
Firefox
Open the browser.
From the menu, select "Web Developer".
Finally, select "Web Console".
Edge
Open the browser.
From the menu, select "Developer Tools".
Finally, select "Console".
Opera
Open the browser.
From the menu, select "Developer".
From "Developer", select "Developer tools".
Finally, select "Console".
Safari
Go to Safari, Preferences, Advanced in the main menu.
Check "Enable Show Develop menu in menu bar".
When the new option "Develop" appears in the menu:
Choose "Show Error Console".

*/