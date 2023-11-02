var fs = require("fs");

// Asynchronous read
var data = fs.readFileSync('pattern1');
console.log("Synchronous read: " + data.toString());


class search{
    constructor(){

    }

    search(){
        console.log("works")
    }
}

let a = new search().search()