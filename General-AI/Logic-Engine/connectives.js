class Connectives{

    constructor(){

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
        return a.reduce((res,val) => (val === false && res === true)?false:true)
    }

    BICONDITIONAL(...a){
        return a.reduce((res,val)=> res === val?true:false)
    }

}

let a = new Connectives()
a.AND(true,true,true)
console.log(a.IMPLIES(false,false,false))