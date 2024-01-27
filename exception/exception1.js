//custom error
function validateName(name) {
    try{
        if(name.match(/\$/)) {
            throw new Error("Name should not contain $")
        } else {
            var err = new Error();
            err.name = "InvalidEmailError";
            err.message = "Invalid Email";
            throw err;
        }
    }   
    catch(error) {
       console.log(error.message);
    }
    finally{
       console.log("cleaning up resources");
    }
}
validateName("Hello$"); 
validateName("Hello");
/*
Name should not contain $
cleaning up resources

Invalid Email
cleaning up resources
*/