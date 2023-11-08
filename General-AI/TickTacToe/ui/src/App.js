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
        console.log(item.val)
        if(item.id === param){
            return {
              ...item,
              val:"X"
            }
          }
      })
    })
  }

  let buttons = box.map(item => <button key={item.id} className='Slots' onClick={() => modifyBox(item.id)}>{item.val}</button>)

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
