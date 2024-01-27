function f1(num1){
    console.log("Hello World",num1);
}

f1(100);
f1();
f1("s");
f1(null);
f1(new String());

/*
Hello World 100
Hello World undefined
Hello World s
Hello World null
Hello World [String: '']
*/