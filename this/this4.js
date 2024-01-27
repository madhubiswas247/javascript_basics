const obj = {
    name: function() {
        console.log(this)
    },
    display : () => console.log(this)
}

obj.name();
obj.display()