class TickTacToe{
    matrix
    role
    state
    constructor(){
        this.role = "X"
        this.state = 0
        this.matrix = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
        this.role == "X"?this.actionX():this.actionO()
        //this.initialParsing()
    }

    actionX(){
        if(state !== 0){
            console.log(this.results())
        }else{
            
        }
    }

    actionO(){
        
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