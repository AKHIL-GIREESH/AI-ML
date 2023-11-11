class TickTacToe{
    matrix
    role
    player
    state
    count
    ExploredList
    depth
    terminationVal
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
        this.terminationVal = {
            "X":1,
            "O":-1
        }
        //this.initialParsing()
    }

    randomGenerator(){
        return Math.floor(Math.random() * 2)
    }

    minmax(state,depth,maximisingFunc){
        if(depth !== 0){
            if(maximisingFunc){
                maxVal = -100
                let tempVal = -100
                let coordinates
                for(let i=0;i<3;i++){
                    for(let j=0;j<3;j++){
                        if(state[i][j] == 0){
                            temp = state
                            temp[i][j] = "X"
                            maxVal = Math.max(maxVal,this.minmax(temp,depth-1,false))
                            if(tempVal !== maxVal){
                                coordinates = [i,j]
                                tempVal = maxVal
                            }
                        }
                    }
                }
                return depth===this.depth? {coordinates,maxVal}:maxVal
            }else{
                let minVal = 100
                let tempVal = 100
                let coordinates
                for(let i = 0;i<3;i++){
                    for(let j=0;j<3;j++){
                        if(state[i][j] == 0){
                            temp = state
                            temp[i][j] = "O"
                            minVal = Math.min(minVal,this.minmax(temp,depth-1,true))
                            if(tempVal !== minVal){
                                coordinates = [i,j]
                                tempVal = minVal
                            }
                        }
                    }
                }
                return depth===this.depth? {coordinates,minVal}:minVal
            }
        }
        // let flag = maximisingFunc?"X":"O"
        // for(let i=0;i<3;i++){
        //     for(let j=0;j<3;j++){
        //         if(state[i][j] === 0){

        //         }
        //     }
        // }
        this.checkTermination(maximisingFunc?"X":"O",state)
    }

    actionPlayer(){
                let a = this.randomGenerator()
                let b = this.randomGenerator()
                while(this.matrix[a][b] !== 0){
                    a = this.randomGenerator()
                    b = this.randomGenerator
                }
                this.matrix[a][b] = "X"
                this.ExploredList.push([a,b])
                console.log(this.matrix)
                this.count[0]++
                if(this.checkTermination() === 1){
                    console.log("Winner is X")
                }else{
                    this.actionMachine()
                }
    }

    actionMachine(){
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
                let {coordinates,minVal} = this.minmax(this.matrix,depth,this.role == "X"?true:false)
                this.matrix[coordinates[0]][coordinates[1]] = "O"
                if(this.checkTermination() === -1){
                    console.log("Winner O")
                }else{
                    this.actionPlayer()
                }
            }
    }

    initialParsing(){
        console.log(this.matrix)
    }

    // results(){
    //     if(this.matrix){

    //     }
    // }

    checkTermination(letter,state){
        for(let i=0;i<3;i++){
            if(state[i][0] == letter && state[i][1] == letter && state[i][2] == letter){
                return this.terminationVal[letter]
            }
        }
        for(let i=0;i<3;i++){
            if(state[0][i] == letter && state[1][i] == letter && state[2][i] == letter){
                return this.terminationVal[letter]
            }
        }

        if(state[0][0] == letter && state[1][1] == letter && state[2][2] == letter){
            return this.terminationVal[letter]
        }
        if(state[2][0] == letter && state[1][1] == letter && state[0][2] == letter){
            return this.terminationVal[letter]
        }
        return 0;
    }
    //func to check whether anybody won
    //func to check who won the game
}

const a = new TickTacToe("X")