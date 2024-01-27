/*Don't always reach for your handy-dandy "for" statement when you need to loop 
through an array or object. Be creative and find the quickest solution for the job at hand.*/

var arr = ["item 1", "item 2", "item 3"];
var list = "<ul><li>" + arr.join("</li><li>") + "</li></ul>";

var list1 = arr.join(" ");
console.log(list);   //<ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>
console.log(list1);  //item 1 item 2 item 3
/*I won’t bore you with benchmarks; you’ll just have to believe me (or test for yourself) - 
this is by far the fastest method!

Using native methods (like join()), regardless of what’s going on behind the abstraction
 layer, is usually much faster than any non-native alternative.
- James Padolsey, james.padolsey.com

<ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>
*/
