class TickTacToe{
    matrix
    role
    player
    state
    count
    ExploredList
    depth
    constructor(role){
        this.role = role=="X"?"O":"X"
        this.depth = 3
        this.player = role
        this.ExploredList = []
        this.state = 0
        this.count = {
            "X":0,
            "O":0
        }
        this.matrix = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
        this.role == "X"?this.actionMachine():this.actionPlayer()
        //this.initialParsing()
    }

    randomGenerator(){
        return Math.floor(Math.random() * 2)
    }

    minmax(state,depth,maximisingFunc){
        while(depth !== 0){
            if(maximisingFunc){
                maxVal = -100
                for(let i=0;i<3;i++){
                    for(let j=0;j<3;j++){
                        if(state[i][j] == 0){
                            temp = this.matrix
                            temp[i][j] = "X"
                            maxVal = Math.max(maxVal,this.minmax(temp,depth-1,false))
                        }
                    }
                }
                return maxVal
            }else{
                minVal = 100
                for(let i = 0;i<3;i++){
                    for(let j=0;j<3;j++){
                        if(this.matrix[i][j] == 0){
                            temp = this.matrix
                            temp[i][j] = "O"
                            minVal = Math.min(minVal,this.minmax(temp,depth-1,true))
                        }
                    }
                }
                return minVal
            }
        }
    }

    actionPlayer(){
        // if(this.state !== 0){
        //     console.log(this.results())
        // }else{
        //     if(this.count[0]<2){
        //         let a = this.randomGenerator()
        //         let b = this.randomGenerator()
        //         while(this.matrix[a][b] !== 0){
        //             a = this.randomGenerator()
        //             b = this.randomGenerator()
        //         }
        //         this.matrix[a][b] = "X"
        //         this.ExploredList.push([a,b])
        //         console.log(this.matrix)
        //         this.count[0]++
        //     }
        // }
    }

    actionMachine(){
        if(this.state !== 0){
            console.log(this.results())
        }else{
            if(this.count[this.role]< this.role=="X"?2:1){
                let a = this.randomGenerator()
                let b = this.randomGenerator()
                while(this.matrix[a][b] !== 0){
                    a = this.randomGenerator()
                    b = this.randomGenerator()
                }
                this.matrix[a][b] = this.role
                console.log(this.matrix)
                this.count[this.role]++
            }else{
                // for(let i=0;i<3;i++){
                //     for(let j=0;j<3;j++){
                //         max = minmax()
                //     }
                // }
                this.minmax(this.matrix,depth,this.role == "X"?true:false)
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

    checkTermination(letter){
        for(let i=0;i<3;i++){
            if(this.matrix[i][0] == letter && this.matrix[i][1] == letter && this.matrix[i][2] == letter){
                return true
            }
        }
        for(let i=0;i<3;i++){
            if(this.matrix[0][i] == letter && this.matrix[1][i] == letter && this.matrix[2][i] == letter){
                return true
            }
        }

        if(this.matrix[0][0] == letter && this.matrix[1][1] == letter && this.matrix[2][2] == letter){
            return true
        }
        if(this.matrix[2][0] == letter && this.matrix[1][1] == letter && this.matrix[0][2] == letter){
            return true
        }
    }
    //func to check whether anybody won
    //func to check who won the game
}

const a = new TickTacToe("X")