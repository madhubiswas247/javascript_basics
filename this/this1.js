var obj = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func: this.foo = " +this.foo);  //outer func: this.foo = bar
        console.log("outer func: self.foo = " +self.foo);  //outer func: self.foo = bar
        if(true) {
            console.log(this.foo,self.foo);  //bar bar
        }
        (function() {
            console.log("inner func: this.foo = " +this.foo); //inner func: this.foo = undefined
            console.log("inner func: self.foo = " +self.foo); //inner func: self.foo = bar
        }());
    }
};
obj.func();
