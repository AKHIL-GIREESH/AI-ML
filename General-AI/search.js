var fs = require("fs");

var data = fs.readFileSync('pattern1').toString();
// let lines = data.split("\n").map(element => element.split(""));
// console.log(lines)


class search{
    rows
    columns
    matrix
    lines
    startingPos
    EndingPos
    Obstracles
    constructor(){
        //this.initialParsing()
        this.lines = data.split("\n")
        this.rows = this.lines.length
        this.columns = this.lines[0].length
        this.matrix = this.lines.map(element => element.split(""))
    }

    initialParsing(){

    }

    search(){
        console.log("works")
    }
}

let a = new search()//.search()