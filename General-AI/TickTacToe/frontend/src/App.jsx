import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  let terminationVal = { "X":1,"O":-1}
  const [matrix, setMatrix] = useState(() => {
    const initialMatrix = Array(3).fill(null).map(() => Array(3).fill(""));
    return initialMatrix;
  });

  const Winner = (letter) => {
    for(let i=0;i<3;i++){
      if(state[i][0] == letter && state[i][1] == letter && state[i][2] == letter){
          return terminationVal[letter]
      }
  }
  for(let i=0;i<3;i++){
      if(state[0][i] == letter && state[1][i] == letter && state[2][i] == letter){
          return terminationVal[letter]
      }
  }

  if(state[0][0] == letter && state[1][1] == letter && state[2][2] == letter){
      return terminationVal[letter]
  }
  if(state[2][0] == letter && state[1][1] == letter && state[0][2] == letter){
      return terminationVal[letter]
  }
  return 0;
  };

  

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
  };

  const Cell = ({ keyy, elem }) => {
    return (
      <div key={keyy} onClick={() => {
        modifyMatrix(keyy, "X");
        
        machineTurn();
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
