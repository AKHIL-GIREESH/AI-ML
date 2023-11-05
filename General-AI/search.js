var fs = require("fs");

var data = fs.readFileSync('pattern3.txt').toString();
// let lines = data.split("\n").map(element => element.split(""));
// console.log(lines)


class search{
    steps
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
        //this.current = this.startingPos
        this.NavigationList.push(this.startingPos)
        this.steps = 0
    }

    initialParsing(){
        for(let i=0;i<this.rows;i++){
            for(let j=0;j<this.columns;j++){
                if(this.matrix[i][j] === 'A'){
                    this.startingPos = [i,j]
                }else if(this.matrix[i][j] === 'B'){
                    this.EndingPos = [i,j]
                }
            }
        }
    }

    nextNodes(element){
        // console.log(!this.ExploredList.includes(`${[element[0]+1,element[1]]}`))
        // console.log(`${[element[0]+1,element[1]]}`)
        if(element[1]-1>-1  && !this.ExploredList.includes(`${[element[0],element[1]-1]}`) && this.matrix[element[0]][element[1]-1] !== "#" ){  //left
            this.NavigationList.push([element[0],element[1]-1])
        }if(element[0]-1>-1  && !this.ExploredList.includes(`${[element[0]-1,element[1]]}`) && this.matrix[element[0]-1][element[1]] !== "#"){ //up
            this.NavigationList.push([element[0]-1,element[1]])
        }if(element[0]+1<this.rows  && !this.ExploredList.includes(`${[element[0]+1,element[1]]}`)  && this.matrix[element[0]+1][element[1]] !== "#"){ //down
            this.NavigationList.push([element[0]+1,element[1]])
        }if(element[1]+1<this.columns  && !this.ExploredList.includes(`${[element[0],element[1]+1]}`)  && this.matrix[element[0]][element[1]+1] !== "#"){ //right
            this.NavigationList.push([element[0],element[1]+1])
        }
    }

    searchStack(){
        this.steps+=1
        //console.log(this.current)
        if(this.NavigationList.length == 0){
            console.log("No Solution")
        }else{
            this.current = this.NavigationList.pop()
            console.log("Current =",this.current)
            if(`${this.current}` === `${this.EndingPos}`){
                console.log("Reached Destination")
                console.log(this.steps)
            }else{
            this.nextNodes(this.current)
            this.ExploredList.push(`${this.current}`)
            console.log(this.ExploredList)
            console.log(this.NavigationList)
            this.searchStack()
            }

        }
    }

    searchQueue(){
        this.steps+=1
        if(this.NavigationList.length == 0){
            console.log("No Solution")
        }else{
            this.current = this.NavigationList.shift()
            console.log("Current =",this.current)
            if(`${this.current}` === `${this.EndingPos}`){
                console.log("Reached Destination")
                console.log(this.steps)
            }else{
            this.nextNodes(this.current)
            this.ExploredList.push(`${this.current}`)
            console.log(this.ExploredList)
            console.log(this.NavigationList)
            this.searchQueue()
            }
        }
    }
}

let a = new search().searchQueue()
//console.log(a.EndingPos)
// let result = a.search()
// while(result === "nil"){
//     result=a.search()
// }
// console.log(result)
//console.log(search)