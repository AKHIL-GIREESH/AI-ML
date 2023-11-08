import './App.css';
import {useEffect, useState} from "react"


function App() {
    const [matrix,setMatrix] = useState(Array(3).fill(Array(3).fill("")))


    const modifyMatrix = (prop,unit) => {
        setMatrix((prevMatrix) => {
            const updatedMatrix = prevMatrix.map((row, i) =>
                row.map((cell, j) =>(3*i+j === prop && cell === "") ? unit : cell)
            );
    
            return updatedMatrix;
        });
        console.log(matrix)
    };    

    const machineTurn = () => {
        let a = Math.floor(Math.random() * 3)
        let b = Math.floor(Math.random() * 3)
        while(matrix[a][b] !== ""){
            a = Math.floor(Math.random() * 3)
            b = Math.floor(Math.random() * 3)
        }
        modifyMatrix(3*a+b,"O")
    }

    const Cell = ({keyy,elem}) => {
        return <div key ={keyy} onClick={()=> {
         modifyMatrix(keyy,"X")
         machineTurn()
        }}>{elem}</div>
    }

    const generateCells = () =>{
        let cells = []
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                cells.push(<Cell keyy={3*i+j} elem = {matrix[i][j]}/>)
            }
        }
        return cells
        //matrix.map(item => item.map(elem => <button onClick={(e)=> modifyMatrix(e)}>{elem}</button>))
    }
    console.log(matrix)
    return(
        <div className='App'>
            <h1>Tic Tac Toe</h1>
            <div className='Boxes'>
                {generateCells()}
            </div>
        </div>
    )
}
export default App;