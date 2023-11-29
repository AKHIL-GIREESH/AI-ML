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

    // currentValCalculator(house,hospital1,hospital2){
    //     return Math.min(Math.abs(house[0]-hospital1[0])+Math.abs(house[1]-hospital1[1]),Math.abs(house[0]-hospital2[0])+Math.abs(house[1]-hospital2[1]))
    // }

    bestMove(index,elem){
        let tempBestValue = this.value
        let bestConfig = null
        if(elem[0]-1>-1 && this.Matrix[elem[0]-1][elem[1]] !== "🏠" && this.Matrix[elem[0]-1][elem[1]] !== "🏥"){
            let tempHospitals = this.hospitals
            let currentVal = 0
            tempHospitals[index] = [elem[0]-1,elem[1]]
            for(let i=0;i<this.houses.length;i++){
                currentVal += Math.min(Math.abs(this.houses[i][0] - tempHospitals[0][0])+Math.abs(this.houses[i][1] - tempHospitals[0][1]),Math.abs(this.houses[i][0] - tempHospitals[1][0])+Math.abs(this.houses[i][1] - tempHospitals[1][1]))//this.currentValCalculator(this.house[i],[this.hospitals[0][0]-1,this.hospitals[0][1]],this.hospitals[1])
            }
            if(tempBestValue>currentVal){
                tempBestValue = currentVal
                bestConfig = tempHospitals[index]
            }
        }

        if(elem[1]-1>-1 && this.Matrix[elem[0]][elem[1]-1] !== "🏠" && this.Matrix[elem[0]][elem[1]-1] !== "🏥"){
            let tempHospitals = this.hospitals
            let currentVal = 0
            tempHospitals[index] = [elem[0],elem[1]-1]
            for(let i=0;i<this.houses.length;i++){
                currentVal += Math.min(Math.abs(this.houses[i][0] - tempHospitals[0][0])+Math.abs(this.houses[i][1] - tempHospitals[0][1]),Math.abs(this.houses[i][0] - tempHospitals[1][0])+Math.abs(this.houses[i][1] - tempHospitals[1][1]))//this.currentValCalculator(this.house[i],[this.hospitals[0][0]-1,this.hospitals[0][1]],this.hospitals[1])

            }
            if(tempBestValue>currentVal){
                tempBestValue = currentVal
                bestConfig = tempHospitals[index]
            }
        }

        if(elem[0]+1<5 && this.Matrix[elem[0]][elem[1]-1] !== "🏠" && this.Matrix[elem[0]][elem[1]-1] !== "🏥"){
            let tempHospitals = this.hospitals
            let currentVal = 0
            tempHospitals[index] = [elem[0]+1,elem[1]]
            for(let i=0;i<this.houses.length;i++){
                currentVal += Math.min(Math.abs(this.houses[i][0] - tempHospitals[0][0])+Math.abs(this.houses[i][1] - tempHospitals[0][1]),Math.abs(this.houses[i][0] - tempHospitals[1][0])+Math.abs(this.houses[i][1] - tempHospitals[1][1]))//this.currentValCalculator(this.house[i],[this.hospitals[0][0]-1,this.hospitals[0][1]],this.hospitals[1])

            }
            if(tempBestValue>currentVal){
                tempBestValue = currentVal
                bestConfig = tempHospitals[index]
            }
        }

        if(elem[1]+1<9 && this.Matrix[elem[0]][elem[1]-1] !== "🏠" && this.Matrix[elem[0]][elem[1]-1] !== "🏥"){
            let tempHospitals = this.hospitals
            let currentVal = 0
            tempHospitals[index] = [elem[0],elem[1]+1]
            for(let i=0;i<this.houses.length;i++){
                currentVal += Math.min(Math.abs(this.houses[i][0] - tempHospitals[0][0])+Math.abs(this.houses[i][1] - tempHospitals[0][1]),Math.abs(this.houses[i][0] - tempHospitals[1][0])+Math.abs(this.houses[i][1] - tempHospitals[1][1]))//this.currentValCalculator(this.house[i],[this.hospitals[0][0]-1,this.hospitals[0][1]],this.hospitals[1])

            }
            if(tempBestValue>currentVal){
                tempBestValue = currentVal
                bestConfig = tempHospitals[index]
            }
        }
        
        return {tempBestValue,bestConfig}
    }

    // bestMove(index,elem){
    //     let tempHospitals = this.hospitals


    // }
    
    Optimizer(){
        for(let i=0;i<this.hospitals.length;i++){
            let {tempBestValue,bestConfig} = this.bestMove(i,this.hospitals[i])
            if(tempBestValue<this.value){
                this.value = tempBestValue
                this.hospitals[i] = bestConfig
            }
        }
        console.log(this.hospitals)
        console.log(this.value)
    }
}

let a = new HillClimbing()
a.Optimizer()