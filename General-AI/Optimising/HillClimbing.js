class HillClimbing{
    Houses
    Matrix
    value
    constructor(){
        this.value = 0
        this.houses = [[1,2],[3,1],[0,8],[4,6]]
        this.hospitals = [[0,4],[3,9]]
        this.Matrix = Array(5).fill(null).map(() => Array(10).fill(""));
        this.matrixGenerator()
    }

    matrixGenerator(){
        for(let i=0;i<this.houses.length;i++){
            //console.log(this.Matrix[i][1])
            this.Matrix[this.houses[i][0]][this.houses[i][1]] = "🏠"
            this.value += Math.min(Math.abs(this.houses[i][0] - this.hospitals[0][0])+Math.abs(this.houses[i][1] - this.hospitals[0][1]),Math.abs(this.houses[i][0] - this.hospitals[1][0])+Math.abs(this.houses[i][1] - this.hospitals[1][1]))
        }
        for(let i=0;i<this.hospitals.length;i++){
            this.Matrix[this.hospitals[i][0]][this.hospitals[i][1]] = "🏥"
        }
        console.log(this.Matrix)
        console.log(this.value)
    }

    Optimizer(){
 
    }
}

let a = new HillClimbing()