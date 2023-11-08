import './App.css';
import {useEffect, useState} from "react"
//import boxx from '../../ui/src/box';

function App() {

  //const [val,setVal] = useState("")
  const [box,setBox] = useState(Array(9).fill(" "))
  //const [machineTurn,setMachineTurn]= useState(false)
  //let buttons = []

  function modifyBox(param,unit){
    // setBox(prevBox => {
    //   return prevBox.map(item => {
    //     if(item.id === param && item.value===" "){
    //       console.log(param)
    //         return {
    //           ...item,
    //           value:unit
    //         }
    //       }else{
    //         return item
    //       }
    //   })
    // })
  }

  console.log(box)
  let buttons = box.map(item =>{ 
  return <div key={item.id} className='Slots' onClick={() => {
    modifyBox(item.id,"X")
    machineTurn()
    }}>{item.value}</div>
})

const randomGenerator = () => {
  return Math.floor(Math.random() * 9)
}

// useEffect(() => {

// },[box])
function machineTurn(){
  let a = randomGenerator()
  while(box[a].value !== ' ' && box[a].value !== "X"){
      console.log("calls this")
      a = randomGenerator()
  }
  console.log("works")
  modifyBox(a,"O")
  //matrix[a][b] = "O"
  // for(let i =0;i<9;i++){
  //   if(box[i].value === ' '){
  //     console.log("hi")
  //     modifyBox(i,"O")
  //     break
  //   }
  // }
}

// let k=0;
//   let matrix = [
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
// ]
//   //console.log(box[k])
//   for(let i=0;i<3;i++){
//     for(let j=0;j<3;j++){
//       matrix[i][j] = box[k].value;
//       k++;
//     }
//   }

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