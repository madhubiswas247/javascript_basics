//custom error
function validateName(name) {
    try{
        if(name.Match(/[\$\#]/) ) //error occurs here for capital M
         {
             //all the below lines of try do nt run as error was thrown in previous line.
           return false;
        } else {
            return true;
        }
    }   
    finally {
        //code for handlingerror
       console.log("finally");
    }
}
validateName("Josh"); 

/*
finally
name.Match is not a function
TypeError: name.Match is not a function
    at validateName (E:\mou tutorial\javascript notes\javacript\exception\except
ion2.js:4:17)
    at Object.<anonymous> (E:\mou tutorial\javascript notes\javacript\exception\
exception2.js:17:1)

-> there should be one catchblock to catch exception
-> js is dynamically types language
   so we cannot specify the different catch blocks for each error instance
->an error inside a try blockcauses the rest of the code to be skipped
->exceptions propagate accross functions until handled
-> when error occurs, the js program crashes and we need to handle it.
*/