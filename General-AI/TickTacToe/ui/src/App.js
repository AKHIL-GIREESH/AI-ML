//import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

  const [val,setVal] = useState("")
  let buttons = []

  const generateBoxes = () => {
    for(let i=0;i<9;i++){
        buttons.push(<button className='Slots' onClick={() => setVal("X")}>{val}</button>)
    }
    return buttons
  }

  return (
    <div className="App">
      <h1>TICK-TAC-TOE</h1>
      <div className="Boxes">
        {generateBoxes()}
      </div>
    </div>
  );
}

export default App;
