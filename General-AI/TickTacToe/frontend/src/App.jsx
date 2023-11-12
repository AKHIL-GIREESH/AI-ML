import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  let terminationVal = { "X":1,"O":-1}
  const [matrix, setMatrix] = useState(() => {
    const initialMatrix = Array(3).fill(null).map(() => Array(3).fill(""));
    return initialMatrix;
  });
  const [currentPlayer,setCurrentPlayer] = useState("O")

  const Winner = (letter) => {
    console.log("Hi")
    for(let i=0;i<3;i++){
      if(matrix[i][0] == letter && matrix[i][1] == letter && matrix[i][2] == letter){
          return terminationVal.letter
      }
  }
  for(let i=0;i<3;i++){
      if(matrix[0][i] == letter && matrix[1][i] == letter && matrix[2][i] == letter){
          return terminationVal.letter
      }
  }

  if(matrix[0][0] == letter && matrix[1][1] == letter && matrix[2][2] == letter){
      return terminationVal.letter
  }
  if(matrix[2][0] == letter && matrix[1][1] == letter && matrix[0][2] == letter){
      return terminationVal.letter
  }
  return 0;
  }

  useEffect(() => {
    console.log("Works!")
    let varA = Winner("X")
    if(varA !== 0){
      console.log(`${"X"} Wins`)
    }else{
      if(currentPlayer==="X"){
        setCurrentPlayer("O")
        machineTurn();
      }else{
        setCurrentPlayer("X")
      }
    }
    
  },[matrix])

  const modifyMatrix = (prop, unit) => {
    setMatrix((prevMatrix) => {
      const updatedMatrix = prevMatrix.map((row, i) =>
        row.map((cell, j) => (3 * i + j === prop && cell === "") ? unit : cell)
      );

      return updatedMatrix;
    });
    console.log(matrix);
  };

  const machineTurn = () => {
    let a = Math.floor(Math.random() * 3);
    let b = Math.floor(Math.random() * 3);
    while (matrix[a][b] !== "") {
      a = Math.floor(Math.random() * 3);
      b = Math.floor(Math.random() * 3);
    }
    modifyMatrix(3 * a + b, "O");
    console.log("Works")
  };

  const Cell = ({ keyy, elem }) => {
    return (
      <div key={keyy} onClick={() => {
        modifyMatrix(keyy, "X");
      }}>
        {elem}
      </div>
    );
  };

  const generateCells = () => {
    let cells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cells.push(<Cell keyy={3 * i + j} elem={matrix[i][j]} />);
      }
    }
    return cells;
  };

  console.log(matrix);

  return (
    <div className='App'>
      <h1>Tic Tac Toe</h1>
      <div className='Boxes'>
        {generateCells()}
      </div>
    </div>
  );
}

export default App;
