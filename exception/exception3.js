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
        if(error instanceof TypeError )    
            console.log("TypeError occurred");
        else if(error instanceof RangeError )    
            console.log("RangeError occurred");
        else if(error instanceof SyntaxError )    
            console.log("SyntaxError occurred");
        else  
            console.log("Some other error occurred");
    }
}
validateName("Josh$"); 
//TypeError occurred