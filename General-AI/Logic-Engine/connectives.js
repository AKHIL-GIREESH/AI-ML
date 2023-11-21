class Connectives{

    Symbols
    Knowledge
    constructor(num){
        this.Symbols = []
        this.Knowledge = Array(2**num).fill(null).map(() => Array(num).fill(""));
        this.initialSetUp(num)
    }

    getResult(){
        console.log("Hi")
        for(let i=0;i<2**3;i++){
            if(parseInt(this.Symbols[i][0]) == this.Knowledge[i][0] && parseInt(this.Symbols[i][1]) == this.Knowledge[i][1] && parseInt(this.Symbols[i][2]) == this.Knowledge[i][2]){
                console.log(this.Knowledge[i][0],this.Knowledge[i][1],this.Knowledge[i][2])
            }
        }
    }

    initialSetUp(num){
        for(let i=0;i<2**num;i++){
            this.Symbols.push(i.toString(2).padStart(num, "0").split(""));
        }
        console.log(this.Symbols)
    }

    AND(...a){
        return a.reduce((res,val) => res && val)
    }

    OR(...a){
        return a.reduce((res,val) => res || val)
    }

    NOT(a){
        return !a
    }

    IMPLIES(...a){
        return a.reduce((res,val) => (val == false && res == true)?false:true)
    }

    BICONDITIONAL(...a){
        return a.reduce((res,val)=> res == val?true:false)
    }

}

let a = new Connectives(3)

for(let i=0;i<8;i++){
    let t = a.Symbols[i]          
    let ans = {P:t[0] === "0"?false:true, Q:t[1] === "0"?false:true, R:t[2] === "0"?false:true}
    //console.log(ans.P,a.NOT(ans.P))
    a.Knowledge[i][0] = a.OR(ans.P,a.NOT(ans.P))
    a.Knowledge[i][1] = a.AND(a.NOT(ans.P),a.NOT(ans.R))
    a.Knowledge[i][2] = ans.P
}
a.getResult()

console.log(a.Knowledge)