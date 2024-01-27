var value1 = 10;
var value2 = 0;
try {
    if(value2 === 0 ) {
        throw new Error();
    } else {
        console.log(value1/value2);
    }
    } catch(error) {
        console.log(error.name + ":" + error.message);
    } 
//Error: