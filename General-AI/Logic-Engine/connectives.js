class Connectives{

    Symbols
    Knowledge
    constructor(num){
        this.Symbols = []
        this.Knowledge = []
        this.initialSetUp(num)
    }

    Symbols(){
    
    }

    checkKnowledge(){
        
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
    let ans = {P:t[0], Q:t[1], R:t[2]}
    a.Knowledge[0].push(ans)
}

console.log(a.Knowledge)