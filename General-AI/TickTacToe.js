class TickTacToe{
    matrix
    role
    state
    count
    ExploredList=[]
    constructor(){
        this.role = "X"
        this.state = 0
        this.count = [0,0]
        this.matrix = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
        this.role == "X"?this.actionX():this.actionO()
        //this.initialParsing()
    }

    randomGenerator(){
        return Math.floor(Math.random() * 2)
    }

    actionX(){
        if(this.state !== 0){
            console.log(this.results())
        }else{
            if(this.count[0]<2){
                let a = this.randomGenerator()
                let b = this.randomGenerator()
                while(this.matrix[a][b] !== 0){
                    a = this.randomGenerator()
                    b = this.randomGenerator()
                }
                this.matrix[a][b] = "X"
                console.log(this.matrix)
                this.count[0]++
                this.actionO()
            }
            
        }
    }

    actionO(){
        if(this.state !== 0){
            console.log(this.results())
        }else{
            if(this.count[1]<1){
                let a = this.randomGenerator()
                let b = this.randomGenerator()
                while(this.matrix[a][b] !== 0){
                    a = this.randomGenerator()
                    b = this.randomGenerator()
                }
                this.matrix[a][b] = "O"
                console.log(this.matrix)
                this.count[1]++
                this.actionX()            
            }
        }
    }

    initialParsing(){
        console.log(this.matrix)
    }

    results(){
        if(this.matrix){

        }
    }

    checkTermination(){

    }
    //func to check whether anybody won
    //func to check who won the game
}

const a = new TickTacToe()