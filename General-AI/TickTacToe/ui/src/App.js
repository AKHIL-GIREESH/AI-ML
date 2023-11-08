//import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import boxx from './box';

function App() {

  //const [val,setVal] = useState("")
  const [box,setBox] = useState(boxx)
  //let buttons = []

  const modifyBox = (param) => {
    setBox(prevBox => {
      return prevBox.map(item => {
        if(item.id === param && item.value===" "){
          console.log(item)
            return {
              ...item,
              value:"X"
            }
          }else{
            return item
          }
      })
    })
  }

  console.log(box)
  let buttons = box.map(item =>{ 
    console.log(item)
  return <button key={item.id} className='Slots' onClick={() => modifyBox(item.id)}>{item.value}</button>
})

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