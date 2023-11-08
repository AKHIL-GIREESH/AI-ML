//import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import boxx from './box';

function App() {

  //const [val,setVal] = useState("")
  const [box,setBox] = useState(boxx)
  const [machineTurn,setMachineTurn]= useState(false)
  //let buttons = []

  const modifyBox = (param,unit) => {
    setBox(prevBox => {
      return prevBox.map(item => {
        if(item.id === param && item.value===" "){
          //setMachineTurn(state => !state)
            return {
              ...item,
              value:unit
            }
          }else{
            return item
          }
      })
    })
  }

  console.log(box)
  let buttons = box.map(item =>{ 
  return <div key={item.id} className='Slots' onClick={() => {
    modifyBox(item.id,"X")
    setMachineTurn(true)
    }}>{item.value}</div>
})

let k=0;
  let matrix = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
  //console.log(box[k])
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      matrix[i][j] = box[k].value;
      k++;
    }
  }
 
const randomGenerator = () => {
  return Math.floor(Math.random() * 2)
}

if(machineTurn){
  let a = randomGenerator()
  let b = randomGenerator()
  while(matrix[a][b] !== ' '){
      a = randomGenerator()
      b = randomGenerator()
  }
  //matrix[a][b] = "O"
  modifyBox(3*a+b,"O")
  setMachineTurn(false)
}

  return (
    <div className="App">
      <h1>TICK-TAC-TOE</h1>
      <div className="Boxes">
        {buttons}
      </div>
    </div>
  );
}

export default App;