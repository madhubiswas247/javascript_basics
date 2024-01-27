/*Nesting code explains its logic and makes it much easier to read, however nesting it too 
far can also make it hard to follow what you are trying to do. Readers of your code shouldn’t 
have to scroll horizontally, or suffer confusion when their code editors wrap long lines 
(this makes your indentation efforts moot anyway).

The other problem of nesting is variable names and loops. As you normally start your first loop 
with i as the iterator variable, you’ll go on with j,k,l and so on. This can become messy
 quite quickly: */

function renderProfiles(o){
  var out = document.getElementById('profiles');
  for(var i=0;i<o.members.length;i++){
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(o.members[i].name));
    var nestedul = document.createElement('ul');
    for(var j=0;j<o.members[i].data.length;j++){
      var datali = document.createElement('li');
      datali.appendChild(
        document.createTextNode(
          o.members[i].data[j].label + ' ' +
          o.members[i].data[j].value
        )
      );
      nestedul.appendChild(datali);
    }
    li.appendChild(nestedul);
  } 
  out.appendChild(ul);
}