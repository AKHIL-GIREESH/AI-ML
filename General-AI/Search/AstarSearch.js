var fs = require("fs");

var data = fs.readFileSync('pattern4.txt').toString();

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



class AstarSearch{
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
                if(this.matrix[i][j] === 'B'){
                    this.EndingPos = [i,j,0,0]
                }
            }
        }

        //console.log(this.EndingPos)
        for(let i=0;i<this.rows;i++){
            for(let j=0;j<this.columns;j++){
                if(this.matrix[i][j] !== "#"){
                    if(this.matrix[i][j] === "A"){
                        this.startingPos = [i,j,Math.abs(this.EndingPos[0]-i)+Math.abs(this.EndingPos[1]-j),0]
                    }
                    this.matrix[i][j] = Math.abs(this.EndingPos[0]-i)+Math.abs(this.EndingPos[1]-j)
                }
            }
        }
        console.log(this.EndingPos,this.startingPos)
        console.log(this.matrix)

    }

    nextNodes(element){
        if(element[1]-1>-1  && !this.ExploredList.some(x => x.includes(`${[element[0],element[1]-1]}`)) && this.matrix[element[0]][element[1]-1] !== "#" ){  //left
            this.NavigationList.push([element[0],element[1]-1,this.matrix[element[0]][element[1]-1],element[3]+1])

        }if(element[0]-1>-1  && !this.ExploredList.some(x => x.includes(`${[element[0]-1,element[1]]}`)) && this.matrix[element[0]-1][element[1]] !== "#"){ //up
            this.NavigationList.push([element[0]-1,element[1],this.matrix[element[0]-1][element[1]],element[3]+1])

        }if(element[0]+1<this.rows  && !this.ExploredList.some(x => x.includes(`${[element[0]+1,element[1]]}`))  && this.matrix[element[0]+1][element[1]] !== "#"){ //down
            this.NavigationList.push([element[0]+1,element[1],this.matrix[element[0]+1][element[1]],element[3]+1])
            
        }if(element[1]+1<this.columns  && !this.ExploredList.some(x => x.includes(`${[element[0],element[1]+1]}`))  && this.matrix[element[0]][element[1]+1] !== "#"){ //right
            this.NavigationList.push([element[0],element[1]+1,this.matrix[element[0]][element[1]+1],element[3]+1])
        }
    }

    search(){
        this.steps +=1
        let min = 0
        if(this.NavigationList.length == 0){
            console.log("No Solution")
        }else{
            //this.current = Math.min(this.NavigationList.pop(),this.NavigationList.pop())
            for(let i=1;i<this.NavigationList.length;i++){
                if(this.NavigationList[i][2]+this.NavigationList[i][3]<this.NavigationList[min][2]+this.NavigationList[min][3]){
                    min = i
                }
            }
            this.current = this.NavigationList.splice(min,1)[0]
            console.log("Current =",this.current)
            if(`${this.current[0]} ${this.current[1]}` === `${this.EndingPos[0]} ${this.EndingPos[1]}`){
                console.log("Reached Destination")
                console.log(this.steps)
            }else{
            this.nextNodes(this.current)
            this.ExploredList.push(`${this.current}`)
            console.log("Explored List = ",this.ExploredList)
            console.log("Navigation List = ",this.NavigationList)
            this.search()
            }
        }
    }
}

const g = new AstarSearch().search()