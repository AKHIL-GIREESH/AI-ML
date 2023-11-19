class Connectives{

    Symbols
    Knowledge
    constructor(num){
        this.Symbols = []
        this.Knowledge = {}
        this.initialSetUp(num)
    }

    Symbols(){
    
    }

    checkKnowledge(){
        
    }

    initialSetUp(num){
        for(let i=0;i<2**num;i++){
            console.log(i.toString(2).padStart(num, "0").split(""));
        }
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
a.AND(true,true,true)
console.log(a.IMPLIES(0,0,1))