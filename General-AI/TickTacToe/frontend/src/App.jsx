import './App.css';
import {useEffect, useState} from "react"


function App() {
    const [matrix,setMatrix] = useState(Array(3).fill(Array(3).fill("")))


    const modifyMatrix = (prop,unit) => {
        setMatrix((prevMatrix) => {
            const updatedMatrix = prevMatrix.map((row, i) =>
                row.map((cell, j) =>3*i+j === prop && cell === "" ? unit : cell)
            );
    
            return updatedMatrix;
        });
    };    

    const machineTurn = () => {
        let a = Math.floor(Math.random() * 2)
        let b = Math.floor(Math.random() * 2)
        while(matrix[a][b] !== ""){
            a = Math.floor(Math.random() * 2)
            b = Math.floor(Math.random() * 2)
        }
        modifyMatrix(3*a+b,"O")
    }

    const Cell = ({keyy,elem}) => {
        return <button key ={keyy} onClick={()=> {
         modifyMatrix(keyy,"X")
         machineTurn()
        }}>{elem}</button>
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
        <>
            <h1>Tic Tac Toe</h1>
            {generateCells()}
        </>
    )
}
export default App;