//LOCAL VARIABLE
 var v =1
function f1(){
   // var i=100;
  // i = 2;
    console.log(v)
}

function f2() {
     v = 2;
    f1()
}
f2();
//O/P->100