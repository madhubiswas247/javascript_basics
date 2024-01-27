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
    catch(error) {
        //code for handlingerror
       console.log(error.message);
    }
}
validateName("Josh"); 

/*
name.Match is not a function
-> there can be only one catchblock
-> js is dynamically types language
   so we cannot specify the different catch blocks for each error instance
->an error inside a try blockcauses the rest of the code to be skipped
->exceptions propagate accross functions until handled
-> when error occurs, the js program crashes and we need to handle
*/