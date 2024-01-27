/*One of the main points to bear in mind when talking about code and data security is not 
to trust any data. This is not only about evil people wanting to hack your systems; it starts
 with plain usability. Users will enter incorrect data, all the time. Not because they are
  stupid, but because they are busy, distracted or the wording on your instructions is confusing 
  them. For example, I just booked a hotel room for a month rather than six days as I entered
   a wrong number … I consider myself fairly smart.

In short, make sure that all the data that goes into your systems is clean and exactly 
what you need. This is most important on the back end when writing out parameters retrieved 
from the URL. In JavaScript, it is very important to test the type of parameters sent to 
your functions (using the typeof keyword). The following would be an error if members is 
not an Array (for example for a string it’ll create a list item for each character of the string):
*/
function buildMemberList(members){
  var all = members.length;
  var ul = document.createElement('ul');
  for(var i=0;i<all;i++){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(members[i].name));
    ul.appendChild(li);
  }
  return ul;
}
//In order to make this work, you need to check the type of members and make sure it is an array:

function buildMemberList(members){
  if(typeof members === 'object' && 
     typeof members.slice === 'function'){
    var all = members.length;
    var ul = document.createElement('ul');
    for(var i=0;i<all;i++){
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(members[i].name));
      ul.appendChild(li);
    }
    return ul;
  }
}