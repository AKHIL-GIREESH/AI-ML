import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  //let depth = 3
  let terminationVal = { "X":1,"O":-1}
  const [matrix, setMatrix] = useState(() => {
    const initialMatrix = Array(3).fill(null).map(() => Array(3).fill(""));
    return initialMatrix;
  });
  const [currentPlayer,setCurrentPlayer] = useState("O")

  const Winner = (letter,state) => {
    for(let i=0;i<3;i++){
      if(state[i][0] == letter && state[i][1] == letter && state[i][2] == letter){
          return terminationVal.letter
      }
  }
  for(let i=0;i<3;i++){
      if(state[0][i] == letter && state[1][i] == letter && state[2][i] == letter){
          return terminationVal.letter
      }
  }

  if(state[0][0] == letter && state[1][1] == letter && state[2][2] == letter){
      return terminationVal.letter
  }
  if(state[2][0] == letter && state[1][1] == letter && state[0][2] == letter){
      return terminationVal.letter
  }
  return 0;
  }

  useEffect(() => {
    console.log("Works!")
    let varA = Winner(currentPlayer,matrix)
    if(varA !== 0){
      console.log(`${currentPlayer} Wins`)
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

  const minimax = (state,player,depth,emptySpaceCount) => {
    //console.log(depth,emptySpaceCount,state,player)
    let varA = Winner(player,state)
    if(varA !== 0){
      return varA
    }else if(emptySpaceCount === 0 || depth === 0){
      return 0
    }else{
      if(emptySpaceCount === null){
        emptySpaceCount = 0
        for(let i=0;i<3;i++){
          for(let j=0;j<3;j++){
            if(matrix[i][j] === ""){
              emptySpaceCount ++
            }
          }
        }
      }
      if(player === "X"){
        var maxVal = -100
        let coordinate = null
        for(let i=0;i<3;i++){
          for(let j=0;j<3;j++){
            if(state[i][j] === ""){
              let tempState = JSON.parse(JSON.stringify(state))
              tempState[i][j] = "X"
              const score = Math.max(maxVal,minimax(tempState,"O",depth-1,emptySpaceCount-1))
              if(score > maxVal){
                console.log("Max",maxVal,score,coordinate)
                maxVal = score
                coordinate = [i,j]
              }
            }
          }
        }
        return depth === 3?{ "bestscore":maxVal,"coordinates":coordinate}:maxVal
      }else if(player === "O"){
        var minVal = 100,coordinate = null
        for(let i=0;i<3;i++){
          for(let j=0;j<3;j++){
            if(state[i][j] === ""){
              let tempState = JSON.parse(JSON.stringify(state))
              tempState[i][j] = "O"
              console.log(tempState)
              const score = Math.min(minVal,minimax(tempState,"X",depth-1,emptySpaceCount-1))
              console.log(score)
              if(score < minVal){
                //console.log("Min",minVal,score,coordinate)
                minVal = score
                coordinate = [i,j]
              }
            }
          }
        }
        return depth === 3?{ "bestscore":minVal,"coordinates":coordinate}:minVal
      }
    }

  }

  const machineTurn = () => {
    let {bestscore,coordinates} = minimax(matrix,"O",3,null)
    console.log(coordinates)
    let a = coordinates[0]
    let b = coordinates[1]
    // let a = Math.floor(Math.random() * 3);
    // let b = Math.floor(Math.random() * 3);
    // while (matrix[a][b] !== "") {
    //   a = Math.floor(Math.random() * 3);
    //   b = Math.floor(Math.random() * 3);
    // }
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