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
    current
    ExploredList = []
    NavigationList = []
    // actions = {
    //     up: this.current[0] - 1,
    //     down: this.current[0] + 1,
    //     left: this.current[1] - 1,
    //     right: this.current[1] + 1
    // }

    constructor(){
        this.lines = data.split("\n")
        this.rows = this.lines.length
        this.columns = this.lines[0].length
        this.matrix = this.lines.map(element => element.split(""))
        //console.log(this.rows, this.columns,this.matrix[0][0])
        this.initialParsing()
        this.current = this.startingPos
        this.NavigationList.push(this.startingPos)
    }

    initialParsing(){
        for(let i=0;i<this.rows;i++){
            for(let j=0;j<this.columns;j++){
                if(this.matrix[i][j] == 'A'){
                    this.startingPos = [i,j]
                }else if(this.matrix[i][j] == "B"){
                    this.EndingPos = [i,j]
                }
            }
        }
    }

    nextNodes(element){
        if(this.matrix[element[0]][element[1]-1] !== "#"){
            console.log("Way found")
        }else if(this.matrix[element[0]-1][element[1]] !== "#"){
            console.log("Way Found")
        }
    }

    search(){
        if(this.NavigationList.length == 0)console.log("No Solution")
        else{
            let popped = this.NavigationList.pop()
            if(popped === "B"){
                console.log("Reached Destination")
            }
            this.nextNodes(popped)
            this.ExploredList.push(popped)

        }
}
}

let a = new search().search()
console.log(search)