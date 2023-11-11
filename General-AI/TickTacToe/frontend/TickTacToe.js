class TickTacToe {
  matrix;
  role;
  player;
  state;
  count;
  ExploredList;
  depth;
  terminationVal;

  constructor(role) {
    this.role = role === "X" ? "O" : "X";
    this.depth = 3;
    this.player = role;
    this.ExploredList = [];
    this.state = 0;
    this.count = {
      X: 0,
      O: 0
    };
    this.matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.role === "X" ? this.actionMachine() : this.actionPlayer();
    this.terminationVal = {
      X: 1,
      O: -1
    };
  }

  randomGenerator() {
    return Math.floor(Math.random() * 2);
  }

  minmax(state, depth, maximizingFunc) {
    if (depth !== 0) {
      if (maximizingFunc) {
        let maxVal = -100;
        let tempVal = -100;
        let coordinates;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (state[i][j] === 0) {
              let temp = JSON.parse(JSON.stringify(state));
              temp[i][j] = "X";
              maxVal = Math.max(maxVal, this.minmax(temp, depth - 1, false));
              if (tempVal !== maxVal) {
                coordinates = [i, j];
                tempVal = maxVal;
              }
            }
          }
        }
        return depth === this.depth ? { coordinates, maxVal } : maxVal;
      } else {
        let minVal = 100;
        let tempVal = 100;
        let coordinates;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (state[i][j] === 0) {
              let temp = JSON.parse(JSON.stringify(state));
              temp[i][j] = "O";
              minVal = Math.min(minVal, this.minmax(temp, depth - 1, true));
              if (tempVal !== minVal) {
                coordinates = [i, j];
                tempVal = minVal;
              }
            }
          }
        }
        return depth === this.depth ? { coordinates, minVal } : minVal;
      }
    }
    return 0;
  }

  actionPlayer() {
    let a = this.randomGenerator();
    let b = this.randomGenerator();
    while (this.matrix[a][b] !== 0) {
      a = this.randomGenerator();
      b = this.randomGenerator();
    }
    this.matrix[a][b] = "X";
    this.ExploredList.push([a, b]);
    console.log(this.matrix);
    this.count[0]++;
    if (this.checkTermination() === 1) {
      console.log("Winner is X");
    } else {
      this.actionMachine();
    }
  }

  actionMachine() {
    if (this.count[this.role] < (this.role === "X" ? 2 : 1)) {
      let a = this.randomGenerator();
      let b = this.randomGenerator();
      while (this.matrix[a][b] !== 0) {
        a = this.randomGenerator();
        b = this.randomGenerator();
      }
      this.matrix[a][b] = this.role;
      console.log(this.matrix);
      this.count[this.role]++;
    } else {
      let { coordinates, minVal } = this.minmax(
        JSON.parse(JSON.stringify(this.matrix)),
        this.depth,
        this.role === "X" ? true : false
      );
      this.matrix[coordinates[0]][coordinates[1]] = "O";
      if (this.checkTermination() === -1) {
        console.log("Winner O");
      } else {
        this.actionPlayer();
      }
    }
  }

  checkTermination() {
    for (let i = 0; i < 3; i++) {
      if (
        this.matrix[i][0] === "X" &&
        this.matrix[i][1] === "X" &&
        this.matrix[i][2] === "X"
      ) {
        return this.terminationVal.X;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        this.matrix[0][i] === "X" &&
        this.matrix[1][i] === "X" &&
        this.matrix[2][i] === "X"
      ) {
        return this.terminationVal.X;
      }
    }

    if (
      this.matrix[0][0] === "X" &&
      this.matrix[1][1] === "X" &&
      this.matrix[2][2] === "X"
    ) {
      return this.terminationVal.X;
    }
    if (
      this.matrix[2][0] === "X" &&
      this.matrix[1][1] === "X" &&
      this.matrix[0][2] === "X"
    ) {
      return this.terminationVal.X;
    }

    return 0;
  }
}

const a = new TickTacToe("X");
