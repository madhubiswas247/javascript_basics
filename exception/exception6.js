//custom error

    try{
       try {
            throw new Error("oops")
        } finally {
            console.log("finally 1");
        }
    }   
    catch(error) {
       console.log('outer '+error.message);
    }
    finally{
       console.log("finally 2");
    }


/*
finally 1
outer oops
finally 2
*/