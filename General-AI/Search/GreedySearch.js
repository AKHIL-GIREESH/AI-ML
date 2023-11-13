var fs = require("fs");

var data = fs.readFileSync('pattern1').toString();

// console.log(data)
// lines = data.split("\n")
// rows = lines.length
// columns = lines[0].length
// matrix = lines.map(element => element.split(""))

// for(let i=0;i<rows;i++){
//     for(let j=0;j<columns;j++){
//         if(matrix[i][j] !== "#"){
//             matrix[i][j] = `${Math.abs(i-0)+Math.abs(j-5)}`
//         }
//     }
// }

//console.log(matrix)



class greedySearch{
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

    constructor(){
        this.lines = data.split("\n")
        this.rows = this.lines.length
        this.columns = this.lines[0].length
        this.matrix = this.lines.map(element => element.split(""))
        this.initialParsing()
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

        console.log(this.EndingPos)
        for(let i=0;i<this.rows;i++){
            for(let j=0;j<this.columns;j++){
                if(this.matrix[i][j] !== "#"){
                    this.matrix[i][j] = `${Math.abs(this.EndingPos[0]-i)+Math.abs(this.EndingPos[1]-j)}`
                }
            }
        }
    }
}

const g = new greedySearch()

console.log(g.matrix)