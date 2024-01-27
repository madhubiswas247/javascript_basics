function foo () {
    try{
        try {
             bar()
         }  
         catch(error) {
            console.log('inner catch foo, '+error.message);
            throw error;
         } 
         finally {
             console.log("finally inner foo");
            // return;
         }
     }   
     catch(error) {
        console.log('outer '+error.message);
     }
     finally{
        console.log("finally outer foo");
     }
}
function bar () {
    try {
        throw new Error('try bar');
     }
     finally{
        console.log("finally bar");
     }
}

foo();
/*
comment return

finally bar
inner catch foo, try bar
finally inner foo
outer try bar
finally outer foo

uncomment return

finally bar
inner catch foo, try bar
finally inner foo
finally outer foo
*/